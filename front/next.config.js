// next.config.js


const withSass = require('@zeit/next-sass');
module.exports = withSass({ onDemandEntries: { maxInactiveAge: 1000 * 60 * 60 } });

// var path = require('path');

// module.exports = {
//   entry: 'index',
//   output: {
//     path: path.join(__dirname, 'scripts'),
//     filename: 'bundle.js'
//   },
//   module: {
//     loaders: [
//       { test: /\.json$/, loader: 'json-loader' }
//     ]
//   },
//   resolve: {
//     extensions: ['', '.webpack.js', '.web.js', '.js']
//   },
//   node: {
//     console: '',
//     fs: 'empty',
//     net: 'empty',
//     tls: 'empty'
//   }
// };

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

