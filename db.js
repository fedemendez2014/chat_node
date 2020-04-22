const db = require('mongoose');
db.Promise = global.Promise;

//mongodb+srv://usermongo:usermongo@telegrom-xdxov.mongodb.net/test
async function connect(url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,

    });
    console.log('[DB] Conectada con éxito');
}

module.exports = connect;