//aqui van todas las rutas de los usuarios
const express = require ('express');
const passport = require('passport');



const OrderService = require('./../services/orderService');
const service = new OrderService();

const router = express.Router();

router.get('/my-orders',
passport.authenticate('jwt',{session: false}),
async(req, res, next)=>{
  try {
    //obtenemos el usuario que esta actualmente loggeado
    const user = req.user;
    //obtenemos a todas las ordenes que tiene ese usuario utilizando el atributo sub que contiene el id del usuario
   const orders = await service.findbyUser(user.sub);
   res.json(orders);

  } catch (error) {
    next(error);
  }
});

module.exports = router;
