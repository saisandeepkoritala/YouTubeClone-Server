const request = require('request');

const getVideoRecCont = (video_id,token,callback) => {
    
    const options = {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/video/recommendations/continuation',
        qs: {
            video_id ,
            continuation_token: token
        },
        headers: {
            'X-RapidAPI-Key':process.env.KEY,
            'X-RapidAPI-Host': 'youtube-v2.p.rapidapi.com'
        }
    };
    request(options, function (error, response, body) {
        if (error) {
            return callback(error, null);
        }
        try {
            const parsedBody = JSON.parse(body);
            callback(null, parsedBody);
        } catch (parseError) {
            callback(parseError, null);
        }
    });
}

module.exports = getVideoRecCont;






