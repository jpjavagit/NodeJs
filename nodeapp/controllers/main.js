module.exports = function(app){
  var maincontroller = {

    dologin: function(req, res){

      var user = req.body.user;

      if(user.email == '' && user.password == ''){
        return res.redirect('/');
      }

      User = app.models.user;
      var queryLogin = {email: user.email, password: user.password};

      User.findOne(queryLogin).select('name lastname email password').exec(function(error, user){
          if(user){
            req.session.user = user;
            res.redirect('/main');
          }else{
            res.redirect('/loginerror');
          }
      });
    },

    index: function(req, res){
        user = req.session.user;
        res.render('main/index', {user: user});
    }
  };
  return maincontroller;
}
