// Cargar modulos
var express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors');

// Carga modulo de mongo
var mongoose = require('mongoose');
var database = require('./config/database');
// Conexion a base de datos Mongo
mongoose.connect(database.localURL);


// Define puerto
var port = process.env.PORT||8080;

// Crea instancia express
var app = express();
app.use(cors());

//Parsear el body usando body parser
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario



require('./app/routes.js')(app);
app.listen(port, () => console.log("Estoy vivo en: "+port) );


// Define la carpeta donde estan los recursos estaticos
// app.use(express.static('./public'));
// app.use(morgan('dev'));
// app.use(bodyParser.urlencoded({'extended':'true'}));
// app.use(bodyParser.json());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));
// app.use(methodOverride('X-HTTP-Method-Override'));
