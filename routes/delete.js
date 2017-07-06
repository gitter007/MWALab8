var express = require('express');
var router = express.Router();
//const crypto = require('crypto');
var mongo = require('mongoskin');
var ObjectID = mongo.ObjectID;

/* GET insert page. */
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
  // res.write("Deleting");
  // res.end();
  //console.log("ObjectId(\'"+req.params.id+"\')");
  //console.log(toObjectID(req.params.id));
  db.collection('homework8').remove({
    _id:toObjectID(req.params.id)
    }, 
    function(err, result) {
    if (err) throw err;
    if (result) console.log('Removed from DB!');
});
  // res.write("DeletingPost");
  // res.end();
  res.redirect('/');
});
module.exports = router;
