const request = require('request');

const getVideoRecomend = (video_id,callback) => {
    console.log("hello",video_id)
    const options = {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/video/recommendations',
        qs: {
            video_id:video_id.video_id
        },
        headers: {
            'X-RapidAPI-Key': process.env.KEY,
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

module.exports = getVideoRecomend;

