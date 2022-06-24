const {Strategy}= require('passport-local');

const AuthService =require('./../../../services/authService');
const service = new AuthService();

const LocalStrategy = new Strategy({
  //con estas opciones le decimos que los campos que debemos enviar desde el cliente deben ser email y password
  usernameField: 'email',
  passwordField: 'password'

},async(email,password, done)=> {
  try {
    //validamos si existe el usuario en la base de datos
    const user = await service.getUser(email, password);

    done(null, user);
  } catch (error) {
    done(error, false)
  }

});

module.exports= LocalStrategy;
