import Users from '../models/users';

export const checkIsRegistered = async (req, res, next) => {
  const { email, password, confirmPassword } = req.body;
  try {
    const data = await Users.findOne({ email });
    if(data) {
      res.status(400).json('User is registered already');
    } else {
      if(password === confirmPassword) {        
        next();
      } else {
        res.status(400).json('Wrong password and confirm password');
      }
    }
  } catch(e) {
    res.status(400).json(e);
  }
}

export const checkIfUserExists = async (req, res, next) => {
  const { email } = req.body;
  try {
    const data = await Users.findOne({ email });
    if(data) {
      if(!data.verified) {
        res.status(401).json('Uset is not registered');
        return;
      }
      next();
      return;
    }
    res.status(201).json('User is not registered');
  } catch(e) {
    res.status(400).json(e);
  }
}
