require('./secrets.js');
module.exports = {
  'facebookAuth': {
    'clientID': process.env.FB_ID || 'set facebook id',
    'clientSecret': process.env.FB_SECRET || 'set facebook secret',
    //set FB subdomain in Portal > App > Settings > 'Add Platform' > Website
    'callbackURL': 'http://localhost:5000/auth/facebook/callback'
  },
  'twitterAuth': {
    'consumerKey': process.env.TWITTER_CONSUMER_KEY || 'set twitter consumer key',
    'consumerSecret': process.env.TWITTER_CONSUMER_SECRET || 'set twitter consumer secret',
    'callbackURL': 'http://localhost:5000/auth/twitter/callback'
  },
  'googleAuth': {
    'clientID': process.env.GOOGLE_CLIENT_ID || 'set google client id',
    'clientSecret': process.env.GOOGLE_CLIENT_SECRET || 'set google client secret',
    'callbackURL': 'http://127.0.0.1:5000/auth/google/callback'
  }
};
