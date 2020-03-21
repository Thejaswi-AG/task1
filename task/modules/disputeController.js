const mongoose=require('mongoose');
var datetime = require('node-datetime');
const DispModel=mongoose.model("dispute");
const DispCommModel=mongoose.model("dispute_comments");
const db=require('../models') ;


const disp=new DispModel();
const dispcomm=new DispCommModel();

disputes=async (req,res)=>{
    disp.settlement_id=req.body.settlement_id;
    disp.issue=req.body.issue;
    disp.subject=req.body.subject;
    disp.save();
    dispcomm.dispute_id= await db.disp.findOne({settlement_id:params},'id');
    dispcomm.user_id=req.body.user_id;
    dispcomm.comments=req.body.comments;
    dispcomm.comments_ts=datetime.now();
    dispcomm.save();

}

module.exports=disputes;