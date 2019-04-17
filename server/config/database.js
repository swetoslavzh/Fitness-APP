const mongoose = require('mongoose');
const User = require('../models/User');

mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.path, { 
      useNewUrlParser: true,
      useCreateIndex: true
     });
    const db = mongoose.connection;

    db.once('open', err => {
        if (err) throw err;
        User.seedAdminUser().then(() => {
          console.log('MongoDB ready!');
        }).catch((err) => {
          console.log('Something went wrong with mongodb');
          console.error(err);
        });
    });
    
    db.on('error', err => console.log(`Database error: ${err}`));
}