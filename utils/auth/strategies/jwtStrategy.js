const {Strategy, ExtractJwt}= require('passport-jwt');
const {config} = require('./../../../config/config')

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //de donde va a sacar el token
  secretOrKey: config.jwtSecret
}

const jwtStrategy = new Strategy(options,(payload, done) =>{
return done (null, payload);

});


module.exports = jwtStrategy;
