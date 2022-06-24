//const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const { config } = require('./../config/config');

const UserService = require('./userService');
const service = new UserService();

class AuthService {

  async getUser(email, password) {
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
    return user;
  }

  signToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }

async sendRecoveryPassword(email){
  const user = await service.findByEmail(email);
  if (!user) {
    throw boom.unauthorized();
  }
  const payload = {sub: user.id};
  const token = jwt.sign(payload, config.jwtSecret, {expiresIn:'15min'});
  const link = `http://myfrontend.com/recovery?token=${token}`; //aca tenemos que poner la url de la vista que tenga para ingresar la nueva contraseña
  await service.update(user.id, {recoveryToken: token})
  const mail ={
    from: config.smtpEmail,
    to: `${user.email}`,
    subject: 'Recuperación de contraseña',
    htmil: `<b> Ingresa a este link => ${link}</b>`,
  }
  const rta = await this.sendMail(mail);
  return rta;
}

async changePassword(token, newPassword){
try {
  const payload = jwt.verify(token, config.jwtSecret);
  const user = await service.findOne(payload.sub);
if (user.recoveryToken !== token) {
  throw boom.unauthorized();
}
const hash = await bcrypt.hash(newPassword, 10);
await service.update(user.id, {recoveryToken: null, password: hash});
return {message: 'password changed'};

} catch (error) {
  throw boom.unauthorized();
}
}

  async sendMail(infomail) {

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.smtpEmail,
        pass: config.smtpPassword,
      },
    });
    await transporter.sendMail(infomail);
    return { message: 'mail enviado' };
  }
}
module.exports = AuthService;
