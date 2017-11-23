// GET /users
exports.list = (req, res) => {
  let users = ["Machin", "Truc", "Alfred"];

  res.render('pages/users/list', { users: users });
}

// GET /users/:name
exports.index = (req, res) => {
  res.render('pages/users/index', { name: req.params.name });
}