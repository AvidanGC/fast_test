const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const cors = require('cors');
const morgan = require('morgan');



//Initializations...
const app = express();

//Settings
app.set('port',process.env.PORT|| 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main' ,
    layoutsDir: path.join(app.get('views'),'layouts'),
    partialsDir: path.join(app.get('views'),'partials'),
    extname:'.hbs',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    }
}));
app.set('view engine', '.hbs');

//Middlewares //funciones q se ejecutan antes de entrar a las rutas.
app.use(express.static('public'));
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());//validacion de intercambio de datos JSON. antes de llegar a las router.

app.get('/', (req, res) => {
    res.render('index');
  //  res.send('-- Welcome to Services GC! --');
  });

//route
app.use(require('./routes/inventory'));

//Server is Listenning
app.listen(app.get('port'), () => {
    console.log(`Server started on port ${app.get('port')}`);
});