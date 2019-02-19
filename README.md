# Template Exemple Express

Système de routage et de controllers.

- Framework: [Express](https://www.npmjs.com/package/express)
- Moteur de templating: [EJS](https://www.npmjs.com/package/ejs)
- Parser de requête POST: [body-parser](https://www.npmjs.com/package/body-parser)

### Mise en ligne
#### Méthode Heroku

- [Télécharger](https://devcenter.heroku.com/articles/heroku-cli#windows) et installer la Heroku CLI
- Heroku se manipule en ligne de commande
- ```heroku login``` pour se connecter au compte heroku
- ```heroku create --region eu``` pour créer l'application sur heroku dans la region européenne
- Le deploiement via heroku se passe entièrement via GIT, avec ```heroku create```, heroku a ajouté un repository au projet nommé 'heroku', quand on veut mettre en production, il suffit de push l'application sur cette branche
- ```git push heroku master``` pour envoyer l'application en prod
- ```heroku open``` pour ouvrir l'application sur le navigateur

A noter que en version gratuite, quand l'application n'est plus utilisée pendant 30 minutes, celle ci se met en veille, la prochaine requete est un peu longue.