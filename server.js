var express = require('express'),
	methodOverride = require('method-override'),
	bodyParser = require('body-parser'),
	models = require('./models/burger.js')

const PORT = 3000;

var app = express();

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function(){
	console.log('Listening on port:', PORT);
});
