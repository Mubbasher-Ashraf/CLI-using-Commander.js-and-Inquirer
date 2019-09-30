const mongoose = require('mongoose');

var schema = mongoose.Schema({
     firstName : {
          type: String
     },
     lastName:{
          type: String
     },
     phone:{
          type: String
     },
     email:{
          type: String
     }
});

module.exports = mongoose.model('Customer',schema);