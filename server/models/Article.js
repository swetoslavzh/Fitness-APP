const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
  title: {
    required: true,
    type: mongoose.Schema.Types.String
  },
  date: {
    required: true,
    type: mongoose.Schema.Types.Date
  },
  img: {
    type: mongoose.Schema.Types.String,
    required: true
  },
  content: {
    type: mongoose.Schema.Types.String,
    required: true
  }
});

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;