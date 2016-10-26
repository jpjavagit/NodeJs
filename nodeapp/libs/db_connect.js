module.exports = function(){
    var mongoose = require('mongoose');
    var url = "mongodb://localhost:27017/nodeapp";
    return mongoose.connect(url);
};
