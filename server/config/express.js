const cors = require('cors');
const bodyParser = require('body-parser');
const passport = require('passport');
const localSignupStrategy = require('../passport/local-signup');
const localLoginStrategy = require('../passport/local-login');
const routes = require('./routes');

module.exports = app => {
  app.use(bodyParser.urlencoded({
    extended: false
  }));
  app.use(bodyParser.json());
  app.use(passport.initialize());
  app.use(cors({
    origin: 'http://localhost:4200'
  }));

  passport.use('local-signup', localSignupStrategy);
  passport.use('local-login', localLoginStrategy);

  // routes
  app.use('/', routes);
}