/*
Created by Rahul Yadav on 28-01-2022
*/
const { App } = require('@slack/bolt');
const { response } = require('express');
require('dotenv').config();
const jsforce = require('jsforce');
const express =require('express');

const abc =express();

const port = process.env.PORT || 30003 ;

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
    socketMode: true, 
    appToken: process.env.SLACK_APP_TOKEN
    //port: process.env.PORT || 3000
  });

  app.message('rahul', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
  });
  

  (async () => {
    // Start your app
    await app.start(port);
  
    console.log('⚡️ Bolt app is running!');
  })();