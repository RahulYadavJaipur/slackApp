const express = require('express');
const exress = require('express');
const jsforce = require('jsforce');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 3030

var oauth2 = new jsforce.OAuth2({
    // you can change loginUrl to connect to sandbox or prerelease env.
    loginUrl : 'https://login.salesforce.com',
    clientId : '3MVG9pRzvMkjMb6lT2n2O0dnKS7nnxkbu722smJP5gFGRi1yb0.Q2lb6JPmlfbBWefD9r5Wy2BtIP_xZmFmO.',
    clientSecret : '0FE98B3B7C1D0A845BEC94446F1063A151281A9AD278748568A31F9CAC39E251',
    redirectUri : 'http://localhost:3030'
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