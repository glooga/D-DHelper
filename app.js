var express = require('express');
var path = require('path');
var random = require('random');

var app = express()

function d2() {
	return random.int(1,2);
}

function d4() {
	return random.int(1,4);
}

function d6() {
	return random.int(1,6);
}

function d8() {
	return random.int(1,8);
}

function d10() {
	return random.int(1,10);
}

function d12() {
	return random.int(1,12);
}

function d20() {
	return random.int(1,20);
}

function d100() {
	return random.int(1,100);
}

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.writeHead(200)
    res.end('Hi everybody!');
});

var server = app.listen(3000, function() {}
);
