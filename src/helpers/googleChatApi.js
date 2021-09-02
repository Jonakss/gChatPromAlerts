const { google } = require('googleapis');
const gchat = google.chat('v1');

const _auth = new google.auth.GoogleAuth({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ['https://www.googleapis.com/auth/chat.bot'],
});


function postMessage(count) {
    return new Promise(function(resolve, reject) {
        getJWT().then(function(token) {
            unirest.post('https://chat.googleapis.com/v1/spaces/#####/messages/')
                .headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token,
            "updateMask":"text"
                })
                .send(JSON.stringify({
                    'text': 'Hello! This is message number ' + count,
                }))
                .end(function(res) {
                console.log(res);
                    resolve();
                });
        }).catch(function(err) {
            reject(err);
        });
    });
  }
  
  async function updateMessage(space, thread ,message) {
    const authClient = await auth.getClient();
    google.options({auth: authClient});
  const res = await gchat.spaces.messages.update({
      name: `spaces/${space}/messages/${thread}.${message}`,
      updateMask: 'text',
      requestBody:{}
  );
  console.log(res.data);
  }
  
  async function getMessage2(space, message, thread){
  const auth = new google.auth.GoogleAuth({
      // Scopes can be specified either as an array or as a single, space-delimited string.
      scopes: ['https://www.googleapis.com/auth/chat.bot'],
    });
    const authClient = await auth.getClient();
    google.options({auth: authClient});
  const res = await gchat.spaces.messages.get({
      name: `spaces/${space}/messages/${thread}.${message}`,
  });
  console.log(res.data);
  };
  
  function getMessage(space, message) {
    return new Promise(function(resolve, reject) {
        getJWT().then(function(token) {
            unirest.get(`https://chat.googleapis.com/v1/spaces/${space}/messages/${message}.${message}`)
                .headers({
                    "Content-Type": "application/json",
                    "Authorization": "Bearer " + token
                })
   //             .send(JSON.stringify())
                .end(function(res) {
                        console.log(res);
                    resolve();
                });
        }).catch(function(err) {
            reject(err);
        });
    });
  }
  
  const webhookURL = '';
  const apiURL = '';
  app.post('/', (req, res) => {
      console.log(req.body);
    res.send('Hello World!')
  })
  
  app.get('/update/:space/:id/:thread', (req, res) => {
      updateMessage(req.params.space, req.params.thread, req.params.id) 
      .then(()=>{
          res.send("Updated");
      }).catch((e)=>{
          console.log(e);
              res.send("Error");
      });
  
      res.send("Updated exit");
  });
  
  app.get('/get/:space/:id/:thread', (req, res) => {
      getMessage2(req.params.space, req.params.id, req.params.thread).then(()=>{
  
      res.send("Updated exit");
      }).catch((e)=>{res.send("Error:");console.log(e);});
      
  });
