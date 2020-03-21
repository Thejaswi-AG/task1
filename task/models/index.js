const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/dis",{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(error)=>{
    if(!error)
        {
            console.log("success connected");
        }   
    else
        {
            console.log("error connecting to database");
        }
    });

    module.exports = {
        Dispute: require('./dispute'),
        Dispute_comments:require('./dispute_comments')
    };