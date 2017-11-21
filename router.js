exports.init = function(app) {
    app.get('/', (req, res) => {
        res.render('pages/index', { name: 'Machin' })
    });
}

