var express = require('express');
var router = express.Router();
var mongo = require('mongoskin');

/* GET home page. */

const myDBName =  'crudApp';
var db = mongo.db("mongodb://localhost:27017/crudApp",{ native_parser:true});


router.get('/', function(req, res, next) {
  db.collection('homework8').find().toArray((err, result) => {
    if (err) return console.log(err)
    // renders index.ejs
    res.render('index.ejs', {title: 'MongoDB CRUD with Map',locations: result})
  })

 // res.render('index', { title: 'MongoDB CRUD with Map' });
});

module.exports = router;
