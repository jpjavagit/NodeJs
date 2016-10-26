exports.notFound = function(req, res, next){
    var RETURN_PROTOCOL = 400;
    res.status(RETURN_PROTOCOL);
    res.render('not-found');
};

exports.serverError = function(error, req, res, next){
    var RETURN_PROTOCOL = 500;
    res.status(RETURN_PROTOCOL);
    res.render('server-error', {error: error});
};
