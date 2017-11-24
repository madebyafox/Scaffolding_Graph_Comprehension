// --- LOADING MODULES
var express = require('express'),
    mongoose = require('mongoose'),
    body_parser = require('body-parser');

// --- INSTANTIATE THE APP
var app = express();

// --- DB DRIVERS
var emptySchema = new mongoose.Schema({}, { strict: false }); //schemaless db
var Entry = mongoose.model('Entry', emptySchema);

 //mongoose.connect('mongodb://localhost/S3-2YPDB'); //FOR LOCAL
mongoose.connect(process.env.CONNECTION); //FOR SERVER
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function callback() {
    console.log('database opened');
});

// --- STATIC MIDDLEWARE
app.use(express.static(__dirname + '/public'));
// app.use('/jsPsych-5.0.3', express.static(__dirname + "/jsPsych-5.0.3"));
// app.use('/jsPsych', express.static(__dirname + "/jsPsych"));

// --- BODY PARSING MIDDLEWARE
app.use(body_parser.json());


// --- VIEW LOCATION, SET UP SERVING STATIC HTML
app.set('views', __dirname + '/public/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

// --- ROUTING
app.get('/', function(request, response) {
    response.render('experiment.html');
});
app.get('/demographic', function(request, response) {
    response.render('demographic.html');
});

app.get('/finish', function(request, response) {
    response.render('finish.html');
});
//log data to node console
// app.post('/experiment-data', function(request, response) {
//     console.log(request.body);
// })

app.post('/experiment-data', function(request, response){
    Entry.create({
        "data":request.body
    });
    response.end();
})


// --- START THE SERVER
var server = app.listen(process.env.PORT, function(){ //SERVER VERSION
// var server = app.listen(3000, function(){ //LOCAL VERSION
    console.log("Listening on port %d", server.address().port);
});
