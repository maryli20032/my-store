//en este archivo ponemos la configuracion del servidor
const express = require('express');
const routerApi = require('./routes');
const {logErrors,errorHandler}=require('./middlewares/errorHandler');

const app = express();
const port = 3000;
app.get('/',(req,res)=>{
  res.send('hola, este es mi server de express');
});
//middlewares
app.use(express.json());

//rutas
routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen (port, ()=>{
  console.log('mi puerto es'+port);
});
