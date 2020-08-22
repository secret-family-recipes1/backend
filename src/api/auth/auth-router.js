const router = require('express').Router();
const bcrypt = require('bcryptjs');

const Users = require('../users/user-model');

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
      res.status(200).json({
        message: `signed in successfully, user: ${user.firstname} ${user.lastname}`,
      });
    } else {
      res
        .status(401)
        .json({ message: `invalid username or password` });
    }
  });
});

module.exports = router;
