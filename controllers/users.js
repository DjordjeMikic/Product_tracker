import Users from '../models/users';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { generateToken } from '../utils/generateToken';
import Mail from '../utils/mail';

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const token = generateToken();
    const mail = new Mail();

    const newUser = new Users({
      fullName,
      email,
      password,
      verifyToken: token
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    await newUser.save();

    await mail.sendMailToUser(token, email);

    res.status(201).json('User is registered successfully');
  } catch(e) {
    res.status(400).json(e);
  }
}

export const verifyAccount = async (req, res) => {
  try {
    const user = await Users.findOne({ verifyToken: req.params.id });
    if(Object.keys(user).length) {
      Users.updateOne(
        { _id: user._id },
        { $set: {
          verified: true,
          verifyToken: null
        } },
        (e, data) => {
          if(e) {
            res.status(400).json(e);
            return;
          }
          res.status(201).json('User is verified');
        } 
      )
    }
  } catch(e) {
    res.status(400).json(e);
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userData = await Users.findOne({ email });

    if(userData) {
      const isMatch = await bcrypt.compare(password, userData.password);

      if(isMatch) {
        const { password, ...rest } = userData._doc;
        const token = jwt.sign({ ...rest }, process.env.JWT_SECRET, {
          expiresIn: '1d'
        });

        res.status(201).json(token);
      } else {
        res.status(400).json('Wrong credentials');
      }
    }
  } catch(e) {
    res.status(400).json(e);
  }
}
