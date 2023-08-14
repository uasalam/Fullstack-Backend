const router = require("express").Router();
let login = require("../../Controllers/login.controller")

//Route of login
router.post("/login", login.loginUser);
router.post("/forgot", login.forgotUser);
router.get("/logout", login.logoutUser);

module.exports = router;