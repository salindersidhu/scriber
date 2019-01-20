const crypto = require('crypto');
const config = require('./config.json')[process.env.NODE_ENV || 'development'];

config.session.key = crypto.randomBytes(256).toString('hex');

module.exports = config;
