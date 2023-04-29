// URL to login page: 
// https://dev-t6ss6l621n8bb4x0.us.auth0.com/u/login?state=hKFo2SBYazM4MTVnb3BZTkZlWHZkdjNFTHlqdFlCWHZMV1hSUqFur3VuaXZlcnNhbC1sb2dpbqN0aWTZIFkwVW9GVVJWX0tubnlZUGh0eVBqWS16VlRQUUw4b2FCo2NpZNkgTmFjYlBTTjZMbzNCR3A1V2NSa1R4RVA3TnR6MzNjN0E

const express = require('express');
const { auth, requiresAuth } = require('express-openid-connect');
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: 'http://localhost:3000', // Change to our URL
  clientID: 'NacbPSN6Lo3BGp5WcRkTxEP7Ntz33c7A',
  issuerBaseURL: 'https://dev-t6ss6l621n8bb4x0.us.auth0.com',
  secret: 'JTQxd54ptCcaqeoGExuzSxHY-EL24dne3qLNum3mu_oObkaU9Uiusye4mRNrz2oA'
};

// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(
    req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
  )
});

// The /profile route will show the user profile as JSON
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function() {
  console.log('Listening on http://localhost:3000'); // Change to our URL
});