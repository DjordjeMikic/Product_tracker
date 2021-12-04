import Users from '../models/users';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;

    const newUser = new Users({
      fullName,
      email,
      password
    });

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);
    newUser.password = hash;

    const saveUser = await newUser.save();

    res.status(201).json(saveUser);
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
