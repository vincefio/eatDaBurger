const express = require('express')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')

var port = 8080;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

var orm = require('./config/orm.js')
var burger = require('./controllers/burgers_controller.js')

//app.use("/", routes);
app.get('/', function*(){

    burger.selectAll(function(data){
      var hbsObject = {
        burgers: data
      }
      console.log(hbsObject)
      res.render('index', hbsObject)
    })

})

app.listen(port, function(){
  console.log('app listening on port ' + port)
});
