const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');

const app = express();

const PostsRoute = require('./routes/postsRoute');
const IndexRoutes = require('./routes/indexRoute');
// const AdminRoutes = require('./routes/adminRoute');
const SalesRoutes = require('./routes/salesAgentRoute');
const Products = require('./routes/productsRoute');


const Users = require('./routes/users');
const Customers = require('./routes/clientRoute');

//passport config
require('./config/passport')(passport);

//DB config
require('dotenv/config');

//connect to Mongo
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true,useUnifiedTopology: true});

  mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

  //pug
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.static(path.join(__dirname, './static')));

//Bodyparser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/posts',PostsRoute);
app.use('/index',IndexRoutes);
// app.use('/admin',AdminRoutes);
app.use('/product',Products);
app.use('/sales',SalesRoutes);
app.use('/users',Users);
app.use('/customer',Customers);

//express session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

//passport middleware
app.use(passport.initialize());
app.use(passport.session());

//connect flash
app.use(flash());



app.get('/salesAgent', (req,res) => {
  res.sendFile(__dirname + '/salesAgent.html')
});


//PORT
app.listen(4000);