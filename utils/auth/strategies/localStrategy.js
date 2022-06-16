const {Strategy}= require('passport-local');
const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');

const UserService =require('./../../../services/userService');


const service = new UserService();

const LocalStrategy = new Strategy({
  //con estas opciones le decimos que los campos que debemos enviar desde el cliente deben ser email y password
  usernameField: 'email',
  passwordField: 'password'

},async(email,password, done)=> {
  try {
    //validamos si existe el usuario en la base de datos
    const user = await service.findByEmail(email);
    if (!user) {
      done(boom.unauthorized(), false);
    }
    // validamos si coinciden las contraseñas
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      done(boom.unauthorized(), false);
    }
    //para no enviar el password lo quitamos de la siguiente forma
    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    done(error, false)
  }

});

module.exports = LocalStrategy();
