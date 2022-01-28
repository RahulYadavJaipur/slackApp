/*
Created by Rahul Yadav on 28-01-2022
*/
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