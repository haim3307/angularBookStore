//import { log } from 'util';

const cors = require('cors');
const express = require('express');

const path = require('path');
const app = express();

const taskRoutes = require('./routes/tasks');
const cmsRoutes = require('./routes/cms');

// settings

app.set('views',path.join(__dirname, 'views'));
app.set('port',4000);
app.engine('html', require('ejs').renderFile);
app.set('view engine','ejs');

// middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));

// routes
app.use('/api',taskRoutes);
app.use('/cms',cmsRoutes);

// static files
app.use(express.static(path.join(__dirname,'client/dist')));
//app.use('/cms/cs',express.static(path.join(__dirname,'views/cms/assets')));

// start server
app.listen(app.get('port'),()=>{
    console.log('listing to port 3000');
});
console.log(require('events'));