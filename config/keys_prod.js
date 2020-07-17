module.exports = {
  google: {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SERVER,
  },
  mongodb: {
    dbURI: process.env.MONGO_URL,
  },
  session: {
    cookieKey: process.env.COOK_KEY,
  },
};
