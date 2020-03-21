const express=require('express');
const router=express.Router();
const mongoose=require('mongoose');
const DispModel=mongoose.model("dispute");
const DispCommModel=mongoose.model("dispute_comments");

const disputes=require('../modules/disputeController');


router.post('/dispute',disputes);

module.exports=router;

