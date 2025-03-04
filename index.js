const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 5000;

// parse request data content type application/x-www-form-rulencoded
app.use(bodyParser.urlencoded({extended: false}));

// parse request data content type application/json
app.use(bodyParser.json());

// define root route
app.get('/', (req, res)=>{
    res.send('Hello World');
});
// import employee routes
const employeeRoutes = require('./src/routes/employee.route');

// import company routes
const companyRoutes = require('./src/routes/company.route');

// import adminlogin routes
const adminloginRoutes = require('./src/routes/adminlogin.route');

// import adminregister routes
const adminregisterRoutes = require('./src/routes/adminregister.route');

// import accessories routes
const accessoriesRoutes = require('./src/routes/accessories.route');

// create employee routes
app.use('/api/v1/employee', employeeRoutes);

// create company routes
app.use('/api/v1/company', companyRoutes);

// create adminlogin routes
app.use('/api/v1/adminlogin', adminloginRoutes);

// create adminregister routes
app.use('/api/v1/adminregister', adminregisterRoutes);

// create accessories routes
app.use('/api/v1/accessories', accessoriesRoutes);

// listen to the port
app.listen(port, ()=>{
    console.log(`Express is running at port ${port}`);


});