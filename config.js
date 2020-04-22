const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://usermongo:usermongo@telegrom-xdxov.mongodb.net/test',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || 'app',
    filesPath: process.env.FILES_PATH || 'files'
};

module.exports = config;