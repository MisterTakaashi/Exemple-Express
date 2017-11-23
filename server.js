let express = require('express');
let bodyParser = require('body-parser');
let router = require('./router');

// On crée l'application
let app = express();

// Permet de parser le body des requêtes, pour obtenir les paramètre POST
app.use(bodyParser.urlencoded({ extended: false }));

// On dit que le moteur de templates sera EJS
app.set('view engine', 'ejs');

// Les images et autres ressources statiques seront dans le dossier public
app.use(express.static(__dirname + '/public'));

// On initialise notre module de routage
router.init(app);

// On demande à l'application d'écouter soit sur le port défini par le système (Heroku définie le 80 de base), soit sur le port 8080
app.listen(process.env.PORT || 8080, () => {
    console.log("Server listening on port 8080");
});