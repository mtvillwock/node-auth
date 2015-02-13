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
  }
};
