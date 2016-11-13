var express  = require('express');
var app = express();                               // create our app w/ express
var morgan = require('morgan');             // log requests to the console (express4)
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var httpPort = 8090

// configuration =================

var fs, configurationFile;

configurationFile = 'config.txt';
fs = require('fs');

var configuration = JSON.parse(
    fs.readFileSync(configurationFile)
);

console.log(configuration.host);
console.log(configuration.user);
console.log(configuration.port);

app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                                         // log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
app.use(methodOverride());


// mysql test =================================================================
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : configuration.host,
  user     : configuration.user,
  port     : configuration.port,
  password : process.env.DBPASS,
  database : 'rggardens'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();


// listen (start app with node server.js) ======================================

app.listen(httpPort);
console.log("App listening on port " + httpPort);
