var express = require('express');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./modules/dataBase/user');

var app = express();

// Database connection
mongoose.connect(keys.database, (err) => {
  if (err){
    console.log(err);
  } else {
    console.log('Connected');
  }
});

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Goal mbr sysem
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/

// GET  /api/v1/users/login
// GET  /api/v1/users/logout
// GET  /api/v1/users/signup

/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Ronald Todo
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
//  Knowledge
//      Unit test
//      Promise
//  Implement
//      monogoDB - user
//
// app.use('/api/v1/users', require('./router/users'))


/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_
// Sam Todo
/*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*/
//  Knowledge
//      MongoLab
//      bike (CURD: Create, Update, Read, Delete)

// Install middleware to parse the request body
app.use(bodyParser.json());

app.use('/users', require('./routers/users'))

app.get('/', function (req, res) {
    res.send('hello')
})

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`)
})
