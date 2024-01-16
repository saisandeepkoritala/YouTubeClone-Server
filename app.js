const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const getData = require("./utils/getData");
const getChannelData = require("./utils/getChannelData");
const data = require("./models/data");
const getTrending = require("./utils/getTrending");
const getVideoDetails = require("./utils/getVideoDetails");
const getComments = require("./utils/getComments");
const getCommentMore = require("./utils/getCommentMore");
const getVideoRecomend = require("./utils/getVideoRecomend");
const getDataMore = require("./utils/getDataMore");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.use("/getData",async(req,res)=>{
    getData(req.body.searchTerm,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:`${Date.now()}`,youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

    // const body = await data.findOne({name:"1704871200568"})
    // res.status(200).json({
    //     status:"success",
    //     message:"orey",
    //     data:body
    // })

})

app.use("/channel",async(req,res)=>{
    getChannelData(req.body.channel_id,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"sai sandeep",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });
    // const body = await data.findOne({name:"sai sandeep"})
    // res.status(200).json({
    //     status:"success",
    //     message:"hi",
    //     data:body
    // })

})

app.use("/getTrending",async(req,res)=>{

    getTrending(async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:`Trending`,youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

//     const body = await data.findOne({name:"Trending"})
//     res.status(200).json({
//         status:"success",
//         message:"hi",
//         data:body
//     })

})

app.use("/getVideoDetails",async(req,res)=>{
    
    getVideoDetails(req.body.video_id,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"video details of video",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

    // const body = await data.findOne({name:"video details of video"})
    // res.status(200).json({
    //     status:"success",
    //     message:"hi",
    //     data:body
    // })

})

app.use("/getComments",async(req,res)=>{

    getComments(req.body.video_id,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"video comments",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

    // const body = await data.findOne({name:"video comments"})
    // res.status(200).json({
    //     status:"success",
    //     message:"hi",
    //     data:body
    // })

})

app.use("/getCommentMore",async(req,res)=>{

    getCommentMore(req.body.video_id,req.body.token,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"video comments more",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

    // const body = await data.findOne({name:"video comments more"})
    // res.status(200).json({
    //     status:"success",
    //     message:"hi",
    //     data:body
    // })

})

app.use("/getVideoRecomend",async(req,res)=>{

    getVideoRecomend(req.body.video_id,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"video recomded 1",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });


    // const body = await data.findOne({name:"video recomded 1"})
    // res.status(200).json({
    //     status:"success",
    //     message:"hi",
    //     data:body
    // })

})

app.use("/getDataMore",async(req,res)=>{

    getDataMore(req.body.searchTerm,req.body.token,async(error, body) => {
        if (error) {
            console.error('Error:', error);
        } else {
            await data.create({name:"get More Data",youtubedata:body})
            res.json({
                status:"success",
                data:body
            })
        }
    });

}) 

module.exports = app;