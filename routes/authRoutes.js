//aqui van todas las rutas de los usuarios
const express = require('express');
const passport = require('passport');

const AuthService = require('./../services/authService');
const router = express.Router();
const service = new AuthService();

router.post(
  '/loggin',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {
      const user = req.user;
      res.json(service.signToken(user));
    } catch (error) {
      next(error);
    }
  }
);

router.post('/recovery', async (req, res, next) => {
  try {
    const { email } = req.body;
    const rta = await service.sendRecoveryPassword(email);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

router.post('/change-password',
//agregar la capa de validacion de los datos enviados desde el cliente o sea crear un schema de validacion de las contraseñas
async (req, res, next) => {
  try {
    const { token, newPassword } = req.body;
    const rta = await service.changePassword(token,newPassword);
    res.json(rta);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
