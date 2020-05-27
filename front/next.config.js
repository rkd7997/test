// next.config.js


const withSass = require('@zeit/next-sass');
module.exports = withSass({ onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 } });
// module.exports = withSass();

// module.exports = withCSS({ onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 } })

