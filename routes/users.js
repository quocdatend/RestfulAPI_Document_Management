var express = require('express');
var router = express.Router();
var userControllers = require('../controllers/users')
let { check_authentication, check_authorization, check_authenticationAdmin, check_authorizationAdmin } = require("../utils/check_auth");
const constants = require('../utils/constants');
let { validate, UserValidation } = require('../utils/validator')

router.get('/', check_authenticationAdmin, check_authorizationAdmin(constants.ADMIN_PERMISSION), UserValidation, validate, userControllers.getAllUsers);

router.post('/', UserValidation, validate, userControllers.createAnUser);

router.put('/:id',check_authentication, check_authorization(constants.USER_PERMISSION), UserValidation, validate, userControllers.updateAnUser);

router.delete('/:id', check_authenticationAdmin, check_authorizationAdmin(constants.ADMIN_PERMISSION), userControllers.deleteAnUser);



module.exports = router;
