// --- LOADING MODULES
var express = require('express'),
    mongoose = require('mongoose'),
    body_parser = require('body-parser');

// --- INSTANTIATE THE APP
var app = express();

// --- DB DRIVERS
var emptySchema = new mongoose.Schema({}, { strict: false }); //schemaless db
var Entry = mongoose.model('Entry', emptySchema);

// mongoose.connect('mongodb://localhost/2YPDB'); //FOR LOCAL
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
//the main experiment
app.get('/experiment', function(request, response) {
    response.render('experiment.html');
});

app.get('/reverse', function(request, response) {
    response.render('reverse.html');
});

app.get('/looping', function(request, response) {
    response.render('looping.html');
});


//norming for linear model questions
app.get('/linear', function(request, response) {
    response.render('norm_linear.html');
});
//norming for triangular model questions
app.get('/triangular', function(request, response) {
    response.render('norm_triangular.html');
});
app.get('/draw', function(request, response) {
    response.render('src/external/instructions_draw.html');
});

app.get('/finish', function(request, response) {
    response.render('finish.html');
});
app.get('/finishTurk', function(request, response) {
    response.render('finishTurk.html');
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
