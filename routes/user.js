const express=require("express");
const { register, login, authUser } = require("../controllers/user.controller");
const isAuth = require("../middleweare/auth");
const { registerRules, validator } = require("../middleweare/validator");
const router=express.Router();


router.post('/register',registerRules(),validator,register);
router.post('/login',login);
router.get('/auth',isAuth,authUser);

module.exports= router;