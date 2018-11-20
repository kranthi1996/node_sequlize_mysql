'use strict';
var express=require('express');
var router=express.Router();
var controller=require('./user.controller');

router.post('/adminRegistration',controller.adminRegistration);

router.post('/sendOtp',controller.sendMobileOtp)

module.exports = router;