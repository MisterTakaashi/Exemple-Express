let home_controller = require('./controllers/home');

exports.init = (app) => {
    // Home

    app.get('/', (req, res) => {
        home_controller.index(req, res);
    });
}

