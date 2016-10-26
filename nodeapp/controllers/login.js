module.exports = function(app){

    var logincontroller = {

      index: function(req, res){
          res.render('login/index');
      },

      loginerror: function(req, res){
          res.render('login/loginerror');
      },

      createuser: function(req, res){
          res.render('login/createuser');
      },

      saveuser: function(req, res){

        User = app.models.user;
        us = req.body.user;

        User.create(us, function(error, us){
          if(error){
          }else{
            req.session.user = us;
            res.redirect('/main');
          }
        });
      },

      logout: function(req, res){
            req.session.destroy();
            res.redirect('/');
      }

    };
    return logincontroller;
}
