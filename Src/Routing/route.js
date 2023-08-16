const router = require('express').Router();

let login = require('./Routes/login.routes');
let employee = require('./Routes/employee.routes')
let customer = require('./Routes/customer.routes')
let upload = require('./Routes/upload.routes')
let order = require('./Routes/order.routes')

//All the Routes that are available in the application are divided into related route files and are called below.
router.use('/auth', login);
router.use('/employee', employee);
router.use('/customer', customer);
router.use('/upload', upload);
router.use('/order', order);

module.exports = router;