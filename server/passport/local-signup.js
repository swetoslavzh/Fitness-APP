const PassportLocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const encryption = require('../utilities/encryption');

module.exports = new PassportLocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  session: false,
  passReqToCallback: true
}, (req, email, password, done) => {
  const salt = encryption.generateSalt();
  const hashedPass = encryption.generateHashedPassword(salt, password);
  User.create({email, hashedPass, salt, name: req.body.name})
    .then(() => {
      return done(null)
    })
    .catch(() => {
      const error = "User with this email already exists";
      return done(error)
    });
});
