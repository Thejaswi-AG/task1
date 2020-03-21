const mongoose=require('mongoose');
const uuidv4=require('uuidv4');
//const myuuid=uuidv4()
const dispute_commentsSchema=mongoose.Schema({
    dispute_id:{
        type:uuidv4
    },
    /*_id:{
        type:uuidv4
    },*/
    user_id:{
        type:String
    },
    comments:{
        type:String
    },
    comments_ts:{
        type:Date
    }
});

module.exports=mongoose.model("dispute_comments",dispute_commentsSchema);