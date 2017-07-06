var express = require('express');
var router = express.Router();
//const crypto = require('crypto');
var mongo = require('mongoskin');
var ObjectID = mongo.ObjectID;

/* GET update page. */
var nameValue = "",categValue = "",longtitudeValue = "",latitudeValue = "";
const myDBName =  'crudApp';
var db = mongo.db("mongodb://localhost:27017/crudApp",{ native_parser:true});
function toObjectID(hex) {
  if (hex instanceof ObjectID) {
    return hex;
  }
  if (!hex || hex.length !== 24) {
    return hex;
  }
  return ObjectID.createFromHexString(hex);
};

router.get('/:id', function(req, res, next) {
    //console.log(toObjectID(req.params.id));
    db.collection('homework8').findOne({_id:toObjectID(req.params.id)}, (err, result) => {
      if (err) return console.log(err)
      //console.log(result);
      nameValue = result.name;
      categValue = result.categ;
      longtitudeValue = result.long;
      latitudeValue = result.lat;
      res.render('update.ejs', {
      title: 'Update location',
      name: nameValue,
      categ:categValue,
      long:longtitudeValue,
      lat:latitudeValue,
      objectId: req.params.id
      })
    })
    
});

router.post('/', function(req, res, next) {

  //console.log(toObjectID(req.body.objectId));
  db.collection('homework8').update({
    _id:toObjectID(req.body.objectId)
    }, 
    {$set:{
      name:req.body.name,
      categ:req.body.categ,
      long:req.body.long,
      lat:req.body.lat
    }
});

  res.redirect('/');
});
module.exports = router;
