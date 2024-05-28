// database.cjs
const Database = require('better-sqlite3');
const db = new Database('agenda.db', { verbose: console.log });

module.exports = db;
