const router = require("express").Router();
let customer = require("../../Controllers/customer.controller")

//Routes related to user actions of types temp-admin, staff, lecturer and student
router.post("/registration", customer.registerationCustomer);
router.post("/register", customer.createCustomer);
router.post("/get/id", customer.findCustomer);
router.post("/update/id", customer.updateCustomer);
router.post("/update/password", customer.updateCustomerPassword);
router.post("/update/picture", customer.updatePicture);
router.post("/delete/id", customer.deleteCustomer);

module.exports = router;