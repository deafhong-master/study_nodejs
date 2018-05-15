var express = require('express');
var app = express();

var server = app.listen(3000, () => {
    console.log('Express server has started on port 3000');
});

// simple router example
// app.get('/', (req, res) => {
//     res.send('Hello World');
// });