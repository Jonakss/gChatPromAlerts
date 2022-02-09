const { google } = require('googleapis');
const gchat = google.chat('v1');

function getAuth(){
    return new google.auth.GoogleAuth({
        // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: ['https://www.googleapis.com/auth/chat.bot'],
    });
};

var chat = {
    newMessage: (space, thread, message) => {
        google.options({auth: getAuth()});
        const res = await gchat.spaces.messages.update({
          name: `spaces/${space}/messages/${thread}.${message}`,
          updateMask: 'text',
          requestBody:{}
        });
        console.log(res.data);
    },
};

module.exports = chat;