const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
 
//Initializations...
const app = express();

//Settings
app.set('port',process.env.PORT|| 3000);

//Middlewares //funciones q se ejecutan antes de entrar a las rutas.
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());//validacion de intercambio de datos JSON. antes de llegar a las router.
app.use(express.urlencoded({extended:true}));

app.get('/', (req, res) => {
    res.send('-- Welcome to Services GC! --');
  });

//route
app.use(require('./routes/inventory'));

//Server is Listenning
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});