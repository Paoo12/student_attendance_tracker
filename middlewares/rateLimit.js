const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
    windowMS: 1 * 60 * 1000,
    max: 15,
    message: 'Too many requests. Please try again later.',

});

module.exports = apiLimiter;