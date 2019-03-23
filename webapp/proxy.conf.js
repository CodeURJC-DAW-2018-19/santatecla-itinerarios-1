const PROXY_CONFIG = [
  {
    "context": ["/", "/api", "/logout", "/login"], // TODO
    "target": "https://localhost:443",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
];

module.exports = PROXY_CONFIG;
