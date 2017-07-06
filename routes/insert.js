var express = require('express');
var router = express.Router();
//const crypto = require('crypto');
var mongo = require('mongoskin');


/* GET insert page. */
const myDBName =  'crudApp';
var db = mongo.db("mongodb://localhost:27017/crudApp",{ native_parser:true});

router.get('/', function(req, res, next) {
  res.render('insert', { title: 'MongoDB CRUD with Map' });
});

router.post('/', function(req, res, next) {
  //res.render('insert', { title: 'MongoDB CRUD with Map' });
  db.bind('homework8');
  //console.log(req.body);
  db.homework8.insert({
    name:req.body.name,
    categ:req.body.categ,
    long: req.body.long, 
    lat: req.body.lat, 

    }, 
    function(err, result) {
    if (err) throw err;
    if (result) console.log('Added to DB!');
});

  res.redirect('/');
});


module.exports = router;
