const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate')





const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));




app.set('view engine', 'ejs');
app.engine('ejs', ejsMate);



app.use('/', (req, res) => {
  res.render('home.ejs');
});



app.listen(3000, () => {
  console.log('Server is running on port 3000');
});