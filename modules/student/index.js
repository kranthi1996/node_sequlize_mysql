'use strict';
var express=require('express');
var router=express.Router();
var controller=require('./student.controller');

router.post('/student',controller.student);

module.exports = router;