//const boom = require('@hapi/boom');

//en esta funcion recibimos el esquema a validar y las propiedades
//si existe un error en la validacion de datos, lanzamos un error con boom, sino continuamos.
function validatorHandler(schema, property) {
  return(req,res,next)=>{
    const data = req [property];
    const {error} = schema.validate(data,{abortEarly:false});
    if(error){
      //next(boom.badRequest(error));
      next (error);
    }
    next();
  }
}

module.exports = validatorHandler;
