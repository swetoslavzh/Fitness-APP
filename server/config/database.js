const mongoose = require('mongoose');
const seedDataService = require('../services/seed-data.service');

mongoose.Promise = global.Promise;

module.exports = (config) => {
    mongoose.connect(config.path, { 
      useNewUrlParser: true,
      useCreateIndex: true
     });
    const db = mongoose.connection;

    db.once('open', err => {
        if (err) throw err;
        Promise.all([ 
          seedDataService.seedAdminAndBasicUser(), 
          seedDataService.seedArticles(),
          seedDataService.seedSampleRoutines()
        ])
          .then(() => {
            console.log('MongoDB ready!');
          }).catch((err) => {
            console.log('Something went wrong with mongodb');
            console.error(err);
          });
    });
    
    db.on('error', err => console.log(`Database error: ${err}`));
}