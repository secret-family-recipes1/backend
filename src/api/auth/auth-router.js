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

module.exports = router;
