var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors());


app.get('/crm.yaml', function(req, res) {
    res.sendfile('./public/crm.yaml');
});

app.get('/swagger.json', function(req, res) {
    res.sendfile('./public/swagger.json');
});
 

// app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 3000);