const file = require("../Services/login.service");
const FileService = new file();

module.exports = { loginUser, logoutUser, forgotUser };

/**
 * @description Find email and authenticate with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {object} success or failure object
 */
async function loginUser(req, res) {
  try {
    const result = await FileService.loginAndAuthenticate(req.body);
    return res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Status: 500, Success: false, Error: `${err.name} : ${err.message}` });
  }
}


/**
 * @description Find email and authenticate with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {object} success or failure object
 */
async function forgotUser(req, res) {
  try {
    const result = await FileService.forgotWebUser(req.body);
    return res.send(result);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Status: 500, Success: false, Error: `${err.name} : ${err.message}` });
  }
}



/**
 * @description Find email and authenticate with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {object} success or failure object
 */
async function logoutUser(req, res) {
  try {
    res.cookie('Cookie', "cookie=loggedout", { maxAge: -1, httpOnly: true, sameSite: 'none', secure: true })
    return res.status(200);
  } catch (err) {
    console.log(err);
    res.status(500).send({ Status: 500, Success: false, Error: `${err.name} : ${err.message}` });
  }
}