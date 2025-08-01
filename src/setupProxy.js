// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function(app) {
//   // Proxy pour l'API backend
//   app.use(
//     '/api',
//     createProxyMiddleware({
//       target: process.env.REACT_APP_API_URL || 'http://localhost:4000',
//       changeOrigin: true,
//       secure: false,
//       ws: true, // enable websocket proxy
//       pathRewrite: {
//         '^/api': '', // remove /api prefix when forwarding
//       },
//     })
//   );

//   // Proxy pour les WebSockets
// //   app.use(
// //     '/ws',
// //     createProxyMiddleware({
// //       target: process.env.REACT_APP_DEV_SERVER_URL || 'http://localhost:3000',
// //       ws: true,
// //       changeOrigin: true,
// //     })
// //   );
// };
