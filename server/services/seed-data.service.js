const fs = require('fs');
const path = require('path');
const encryption = require('../utilities/encryption');
const User = require('../models/User');
const Article = require('../models/Article');
const Routine = require('../models/Routine');

async function seedAdminAndBasicUser() {
  const users = await User.find();
  if (users.length > 0) return;

  const saltAdmin = encryption.generateSalt();
  const hashedPassAdmin = encryption.generateHashedPassword(saltAdmin, 'Admin');
  User.create({
    name: 'Admin',
    email: 'admin@admin.com',
    salt: saltAdmin,
    hashedPass: hashedPassAdmin,
    roles: ['Admin']
  });

  const saltUser = encryption.generateSalt();
  const hashedPassUser = encryption.generateHashedPassword(saltUser, 'test123');
  User.create({
    name: 'Svetoslav',
    email: 'swetoslavj@gmail.com',
    salt: saltUser,
    hashedPass: hashedPassUser,
    roles: []
  });
};

async function seedArticles() {
  const articles = await Article.find();
  if (articles.length > 0) return;

  const articlesJSON = fs.readFileSync(path.join(__dirname, '../data') + '/articles.json');
  const articlesArr = JSON.parse(articlesJSON);
  const date = new Date();

  for (const article of articlesArr) {
    Article.create({
      title: article.title,
      content: article.content,
      img: article.img,
      date
    });
  }
}

async function seedSampleRoutines() {
  const rouitines = await Routine.find();
  if (rouitines.length > 0) return;

  const sampleRoutinesJSON = fs.readFileSync(path.join(__dirname, '../data') + '/sample-routines.json');
  const sampleRoutinesArr = JSON.parse(sampleRoutinesJSON);

  for (const routine of sampleRoutinesArr) {
    Routine.create({
      name: routine.name,
      routine: routine.routine,
      isSample: true
    });
  }
}

module.exports = {
  seedAdminAndBasicUser,
  seedArticles,
  seedSampleRoutines
}