//en este archivo ponemos la configuracion del servidor
const express = require('express');
//const cors = require('cors');
const routerApi = require('./routes');
const {logErrors,errorHandler}=require('./middlewares/errorHandler');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

app.get('/',(req,res)=>{
  res.send('hola, este es mi server de express');
});

//rutas
routerApi(app);

app.use(logErrors);
//app.use(boomErrorHandler);
app.use(errorHandler);

app.listen (port, ()=>{
  console.log('mi puerto es'+port);
});
