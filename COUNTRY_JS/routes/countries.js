
var express = require('express'); //Carica il modulo express
var router = express.Router(); //Ottiene un oggetto router
var country = require('countryjs');

nd(country.info('IT'));  //Restituisce le informazioni sull’italia
});
router.get('/info/:state/', function(req, res, next){ //Rendiamo lo stato un parametro
 res.send(req.params);
})

module.exports = router; //esporta il modulo per poterlo usare in app.js

