/**
 * Created by esco on 9/14/2017.
 */

let express = require('express');
let app = express();

let port = 8080;

//all the user routes will be mapped here
app.use('/user',require('./routes/users'));

app.listen(port);

console.log("Listening on port " + port);

module.exports = app;  //testing purpose