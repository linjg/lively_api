
/*
 * GET users listing.
 */

var u=require('../lib/utils.js');



exports.list = function(req, res){
  res.send('respond with a resource');
};


/*
 * GET login page.
 */

exports.login = function(req, res, next) {
  res.render('login');
};

/*
 * GET logout route.
 */

exports.logout = function(req, res, next) {

  res.redirect('/');
};


/*
 * POST authenticate route.
 */

exports.authenticate = function(req, res, next) {
  res.redirect('/admin');

};


exports.user_list = function(req, res, next) {
  req.collections.users.find({}).toArray(function(error, user_list) {
    if (error) return next(error);
    res.send({users:user_list});
  });
};



exports.user_insert = function(req, res, next) {

 var user_random_name=u.user_random_name()


var user={username:user_random_name,password:'123456'};


  req.collections.users.insert(user, function(error, articleResponse) {
    if (error) return next(error);
    res.send(articleResponse);
  });
};





