const express=require('express');

const bodyParser=require('body-parser');

const app=express();

const loginRoutes=require('./routes/admin');

const dataRoutes=require('./routes/data');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoutes);
  
app.use(dataRoutes);

app.listen(3000);






