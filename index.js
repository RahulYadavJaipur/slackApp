/*
Created by Rahul Yadav on 28-01-2022
*/
/*
const { App } = require('@slack/bolt');
const { response } = require('express');
require('dotenv').config();
const jsforce = require('jsforce');
const express =require('express');

const abc =express();

var PORT = process.env.PORT || 30003;

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN
  });

  app.message('rahul', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
  



// Shortcuts
app.shortcut('who_am_i', async({
    shortcut,
    ack,
    client
  }) => {
    try {
      //acknowledge shortcut req
      await ack();
      //call the view.open method
      const result = await client.views.open({
        trigger_id : shortcut.trigger_id,
        view: {
          type : "modal",
          title: {
            type: "plain_text",
            text: "My App"
          },
          close: {
            type:"plain_text",
            text:"Close"
          },
          blocks: [{
            type: "section",
            text: {
              type: "mrkdwn",
              text: "hello KeyKloud Team"
            }
          }]
        }
      });
      console.log(result);
  
    } catch(error){
      console.error(error);
    }
  
  });
  
  


  (async () => {
    // Start your app
    await app.start(PORT);
  
    console.log('⚡️ Bolt app is running!');
  })();
   */
  /*
  const { App, SocketModeReceiver } = require('@slack/bolt');
  const port = process.env.port || 3000;
 require('dotenv').config();
const socketModeReceiver = new SocketModeReceiver({
  appToken: process.env.SLACK_APP_TOKEN,

  // enable the following if you want to use OAuth
  // clientId: process.env.CLIENT_ID,
  // clientSecret: process.env.CLIENT_SECRET,
  // stateSecret: 'my-state-secret',
  // scopes: ['channels:read', 'chat:write', 'app_mentions:read', 'channels:manage', 'commands'],
});

const app = new App({
  receiver: socketModeReceiver,
  // disable token line below if using OAuth
  token: process.env.SLACK_BOT_TOKEN
});

app.message('rahul', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
  



// Shortcuts
app.shortcut('who_am_i', async({
    shortcut,
    ack,
    client
  }) => {
    try {
      //acknowledge shortcut req
      await ack();
      //call the view.open method
      const result = await client.views.open({
        trigger_id : shortcut.trigger_id,
        view: {
          type : "modal",
          title: {
            type: "plain_text",
            text: "My App"
          },
          close: {
            type:"plain_text",
            text:"Close"
          },
          blocks: [{
            type: "section",
            text: {
              type: "mrkdwn",
              text: "hello KeyKloud Team"
            }
          }]
        }
      });
      console.log(result);
  
    } catch(error){
      console.error(error);
    }
  
  });
/*
(async () => {
  await app.start(port);
  console.log('⚡️ Bolt app started');
})();

app.listen(port, ()=>{
  //await app.start(port);
  console.log('⚡️ Bolt app started');
}) */

const { App } = require('@slack/bolt');
require('dotenv').config();

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
  port: process.env.PORT || 30000
});

app.message('hey', async ({message, say})=> {
        await say(`hey, <@${message.user}>!`);
});

//regexp for the evnets
app.message(/^(hi|hello|hii|Good Morning|Good Evening).*/, async ({ context, say }) => {
  // RegExp matches are inside of context.matches
  const greeting = context.matches[0];

  await say(`${greeting}, how are you?`);
});

app.message(':taco:', async ({ message, say }) => {
  await say(`Congratulation, <@${message.user}> You Got Taco`);
});
app.message('not avilable', async({message, say})=>{
   await say(`Hey <@${message.user}> Please add ooo on google calender`);
});

(async ()=> {
  await app.start();
  console.log('⚡️ Bolt app started');
})();

app.shortcut('who_am_i', async({
  shortcut,
  ack,
  client
}) => {
  try {
    //acknowledge shortcut req
    await ack();
    //call the view.open method
    const result = await client.views.open({
      trigger_id : shortcut.trigger_id,
      view: {
        type : "modal",
        title: {
          type: "plain_text",
          text: "My App"
        },
        close: {
          type:"plain_text",
          text:"Close"
        },
        blocks: [{
          type: "section",
          text: {
            type: "mrkdwn",
            text: "hello KeyKloud Team"
          }
        }]
      }
    });
    console.log(result);

  } catch(error){
    console.error(error);
  }

});