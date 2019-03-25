const PROXY_CONFIG = [
  {
    "context": ["/api", "/logout", "/summary"], // TODO
    "target": "https://localhost:8443",
    "secure": false,
    "changeOrigin": true,
    "logLevel": "debug"
  }
];

module.exports = PROXY_CONFIG;
