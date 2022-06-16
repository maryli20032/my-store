//const boom = require('@hapi/boom');
const {config} = require('./../config/config');

function checkApiKey(req, res, next){
const apiKey = req.headers['api'];
if(apiKey===config.apiKey){
next();
}else{
  //next(boom.unauthorized());
}
}

//usando closure de js vamos a recibir roles y vamos a devolver middlewares
function checkRoles(...roles) {
  return(req,res,next) =>{
    const user = req.user;
    if (roles.includes(user.role)) { //tenemos un array de roles y verificamos si el role del usuario esta incluido ahi
      next();
    }else{
      //next(boom.unauthorized());
    }
  }
}
module.exports = {checkApiKey, checkRoles};
