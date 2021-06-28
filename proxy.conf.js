const PROXY_CONFIG = [
    {
        context: ['/'],
        target: 'http://192.168.1.123:5050/api',
        secure: false,
        logLevel: 'debug'
    }
];

module.exports = PROXY.PROXY_CONFIG;