let express = require('express');
let router = require('./router');

let app = express();
let path = __dirname + '/views/';

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

router.init(app);

app.listen(8080, () => {
    console.log("Server listening on port 8080");
});