//en este archivo ponemos la configuracion del servidor
const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandler, ormErrorHandler } = require('./middlewares/errorHandler');
const {checkApiKey}= require('./middlewares/authHandler');

const app = express();
const port = process.env.PORT || 3000;

//middlewares
app.use(express.json());

const whitelist = ['http://localhost:8080'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('no permitido'));
    }
  }
}
app.use(cors(options));

require('./utils/auth');

app.get('/',(req,res)=>{
  res.send('hola, este es mi server de express');
});

app.get('/nuevaruta',checkApiKey,(req,res)=>{
  res.send('hola, este es una nueva ruta');
});

//rutas
routerApi(app);


app.use(logErrors);
app.use(ormErrorHandler);
//app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi puerto: ${port}`);
});
