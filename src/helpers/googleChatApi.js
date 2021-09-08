const { google } = require('googleapis');
const gchat = google.chat('v1');
const logger = require('./logger');

const _auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/chat.bot'],
});

async function updateMessage(space, thread ,message) {
    google.options({auth: _auth});
    const res = await gchat.spaces.messages.send({
        name: `spaces/${space}/messages/${thread}.${message}`,
        updateMask: 'text',
        requestBody:{},
    });
    return res;
};

async function sendMessage(space, thread, messageId, message) {
    
    const auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
        scopes: ['https://www.googleapis.com/auth/chat.bot'],
    });

    // Acquire an auth client, and bind it to all future calls
    const authClient = await auth.getClient();
    google.options({auth: authClient});
    let res = await gchat.spaces.messages.create({
        name: `spaces/${space}`,
        requestBody:{
            actionResponse: {},
            annotations: [],
            argumentText: "my_argumentText",
            attachment: [],
            cards: [],
            createTime: "my_createTime",
            fallbackText: "my_fallbackText",
            // lastUpdateTime: "my_lastUpdateTime",
            // name: "my_name",
            previewText: "my_previewText",
            sender: {},
            slashCommand: {},
            space: {
                name: 'spaces/AAAASGYz1ug',
                type: 'ROOM',
                singleUserBotDm: false,
                threaded: true,
                displayName: 'Pruebas alertas'
              },
            text: message,
            thread: {}
        }
    }).catch(e => {logger.error(e); throw e});
    logger.info(res);
    return res;
}
  
async function getMessage(space, message, thread){
    google.options({auth: _auth});
    const res = await gchat.spaces.messages.get({
        name: `spaces/${space}/messages/${thread}.${message}`,
    });
    return res;
};

module.exports.updateMessage = updateMessage;
module.exports.sendMessage = sendMessage;
module.exports.getMessage = getMessage;
