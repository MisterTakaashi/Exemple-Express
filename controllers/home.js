// GET /
exports.index = (req, res) => {
  let db = require('../models/db').init();

  res.render('pages/home/index');
}