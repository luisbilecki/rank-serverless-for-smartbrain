'use strict';

const emojis = ['😄','😃','😀','😊','😉','😍','🔶','🔷', '🚀'];

module.exports.rank = async(event) => {
  const rank = parseInt(event.queryStringParameters.entries);
  const rankEmoji = emojis[rank >= emojis.length ? emojis.length - 1 : rank];
  
  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': 'http://localhost:3001', // Add your domain name here
    },
    body: JSON.stringify(
      {
        success: true,
        emoji: rankEmoji,
      },
      null,
      2
    ),
  };
};
