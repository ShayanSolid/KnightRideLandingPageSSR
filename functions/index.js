const functions = require("firebase-functions");
const { Nuxt } = require("nuxt-start");

const nuxtConfig = require("./nuxt.config.js");

const config = {
  ...nuxtConfig,
  dev: false,
  debug: false,
  buildDir: ".nuxt",
  publicPath: "public"
};

const nuxt = new Nuxt(config);

let isReady = false;

async function handleRequest(req, res) {
  if (!isReady) {
    try {
      isReady = await nuxt.ready();
    } catch (error) {
      process.exit(1);
    }
  }
  res.set('Cache-Control', 'public, max-age=86400, s-maxage=2592000');
  await nuxt.render(req, res);
}

exports.ssrapp = functions.https.onRequest(handleRequest);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
