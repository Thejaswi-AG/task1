const mongoose=require('mongoose');
const uuidv4=require('uuidv4');

const disputeSchema=mongoose.Schema({
    settlement_id:{
        type:uuidv4
    },    
    /*_id:{
        type:uuidv4
    },*/
    issue:{
        type:String
    },
    subject:{
        type:String
    },
    status:{
        type:Boolean
    },
    final_decision:{
        type:Boolean
    },
    final_comment:{
        type:String
    },
    final_decision_ts:{
        type:Date
    }
});

module.exports=mongoose.model("dispute",disputeSchema);