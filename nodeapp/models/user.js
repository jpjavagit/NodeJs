module.exports = function(app){

  var db = require('../libs/db_connect')(),
  Schema = require('mongoose').Schema;

  var user = Schema({
      name: {type: String, required: true},
      lastname: {type: String, required: true},
      password: {type: String, required: true},
      email: {type: String, required: true, index: {unique: true}}
  });

  return db.model('user', user);
};
