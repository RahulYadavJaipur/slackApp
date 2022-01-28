const express = require('express');
const exress = require('express');
const jsforce = require('jsforce');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 30009

var oauth2 = new jsforce.OAuth2({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://login.salesforce.com',
    clientId : '3MVG9pRzvMkjMb6lT2n2O0dnKS4Z_Qm8MqYQAqhj_l37LmiopXmNLSzdQ3yK5jhV3TH16o46HTLV_K4jg9XeO',
    clientSecret : 'B11F12D0350C0517001BF432958F60C3CCF9BEB612243E51C112F279E1753D4E',
    redirectUri : 'https://login.salesforce.com/oauth2/callback'
  });
  //
  // Get authorization url and redirect to it.
  //
  app.get('/oauth2/auth', function(req, res) {
    res.redirect(oauth2.getAuthorizationUrl({ scope : 'api id web' }));
  });

app.get('/', (req ,res)=> {
    res.send("Sdfad");
})

  app.listen(port, ()=>{
      console.log(`server start at http://localhost:${port}`);
  });