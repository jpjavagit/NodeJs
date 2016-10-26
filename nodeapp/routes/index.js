module.exports = function(app){
    var main = app.controllers.main,
        login = app.controllers.login,
        auth = require('./../util/simpleauth');
    app.get('/', login.index);
    app.post('/', login.index);
    app.post('/dologin', main.dologin);
    app.get('/loginerror', login.loginerror);
    app.get('/index', auth, main.index);
    app.get('/createuser', login.createuser);
    app.post('/createuser', login.saveuser);
    app.get('/logout',  login.logout);
    app.get('/main', auth, main.index);
}
