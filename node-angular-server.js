var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
/**
 * This server should host angular appliation with or without base-url
 * The angular static resources should be under `./public`
 */
var app = express();
app.use(function (req, res, next) {
  console.log('Time:', Date.now() + ":" , req.originalUrl)
  next()
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/base-here-if-any', express.static(path.join(__dirname, 'public')))

app.get('*', function(req, res, next) {
  //Path to your main file
  res.status(200).sendFile(path.join(__dirname+'/public/index.html')); 
});


const port = 3000


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
