var express = require('express');
var app = express();
var router = require('./router/main')(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, () => {
    console.log("Express server has started on port 3000")
});
// style.css 파일 추가 후 작성.
app.use(express.static('public'));