const request = require('request');

const getChannelData = (channel_id,callback) => {
    const options = {
        method: 'GET',
        url: 'https://youtube-v2.p.rapidapi.com/channel/details',
        qs: {
            channel_id:channel_id
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

module.exports = getChannelData;
