const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
    name:{
        type:String
    },
    youtubedata:{
        type:mongoose.Schema.Types.Mixed
    }
})

const data = mongoose.model("youtube",dataSchema);

module.exports = data;