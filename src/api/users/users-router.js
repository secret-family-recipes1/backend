const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('./user-model');
const constants = require('../../utils/constants');

router.post('/register', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  const passHash = bcrypt.hashSync(password);

  Users.addUser({
    firstname,
    lastname,
    email,
    password: passHash,
  }).then((user) => {
    res.status(200).json(user);
  });
});

router.post('/login', (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  Users.findBy({ email: email }).then(([user]) => {
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = signToken(user);

      res.status(200).json({
        message: `signed in successfully, user: ${user.firstname} ${user.lastname}`,
        token,
      });
    } else {
      res
        .status(401)
        .json({ message: `invalid username or password` });
    }
  });
});

function signToken(user) {
  const payload = {
    subject: user.id,
    firstname: user.firstname,
    lastname: user.firstname,
  };

  const options = {
    expiresIn: '10d',
  };

  return jwt.sign(payload, constants.jwtSecret, options);
}

module.exports = router;
