import { compare, genSalt, hash } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import { User } from '../models';
import { SECRET } from '../config';
import { JWT_EXPIRATION_TIME } from '../constants';

const test = (req, res) => res.json({ msg: 'Users endpoint works with controller!!!' });

const register = (req, res) => {
  const { email, name, password } = req.body;

  User.findOne({ email }).then(user => {
    if (user) {
      return res.status(400).json({ email: 'Email already exists' });
    } else {

      const newUser = new User({
        name,
        email,
      });

      genSalt(10, (err, salt) => {
        hash(password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const { id, name, avatar } = user;
              const payload = { id, name, avatar };
              // Sign the token
              const token = sign(payload, SECRET, {
                expiresIn: JWT_EXPIRATION_TIME,
              });

              return res.json({ success: true, token });
              res.json(user);
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
};

const login = (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  User.findOne({ email }).then(user => {
    // Check for user
    if (!user) {
      return res.status(404).json({ email: 'User not found' });
    }

    const { avatar, id, name } = user;

    // Check password
    compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User Matched
        const payload = { id, name, avatar }; // Create JWT Payload

        // Sign the token
        const token = sign(payload, SECRET, { expiresIn: JWT_EXPIRATION_TIME });

        return res.json({ success: true, token });
      } else {
        return res.status(400).json({ password: 'Password incorrect' });
      }
    });
  });
};

const current = (req, res) => res.json(req.user);

export default {
  current,
  login,
  register,
  test,
};
