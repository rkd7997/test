// next.config.js


const withSass = require('@zeit/next-sass');
module.exports = withSass({ onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 } });
// module.exports = withSass();

// module.exports = {
//     webpack: (config, { isServer }) => {
//       // Fixes npm packages that depend on `fs` module
//       if (!isServer) {
//         config.node = {
//           fs: 'empty'
//         }
//       }
  
//       return config
//     }
//   }

// module.exports = withCSS({ onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 } })

