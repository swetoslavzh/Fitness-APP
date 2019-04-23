const Article = require('../models/Article');

module.exports = {
  getArticles: (req, res) => {
    Article.find({})
      .then((data) => {
        return res.status(200).json(data)
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  getArticle: (req, res) => {
    const id = req.body.id;

    Article.findOne({ _id: id} )
      .then((article) => {
        return res.status(200).json(article);
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  },
  postArticle: (req, res) => {
    const { title, content, img } = req.body;
    let date = new Date();

    Article.create({
      title,
      date,
      content,
      img
    }).then((_data) => {
      return res.status(200).json({
        success: true,
        message: 'Successfully added a new article'
      });
    })
    .catch((err) => {
      return res.status(404).json({
        success: false,
        message: err.message
      });
    });
  },
  editArticle: (req, res) => {
    let { id, title, content, img } = req.body;
    let date = new Date();
    Article.findOneAndUpdate({ _id: id }, { date, title, content, img }, { uspert: true })
      .then((data) => {
        return res.status(200).json({
          success: true,
          message: 'Article was successfuly updated'
        })
      })
      .catch((err) => {
        return res.status(404).json({
          success: false,
          message: err.message
        });
      });
  }
};