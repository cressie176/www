const session = require('express-session');

/********************************************************************************************
 Using 'module.exports' to workaround TypeError require is not a function
 See https://stackoverflow.com/questions/33007878/nodejs-typeerror-require-is-not-a-function
 ********************************************************************************************/
module.exports = function() {

  function start({ config, logger, }, cb) {

    logger.info('Using memory based session');

    cb(null, session({
      secret: config.secret,
      resave: true,
      saveUninitialized: true,
    }));
  }

  return {
    start,
  };
};
