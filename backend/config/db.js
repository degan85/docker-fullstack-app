const mysql = require("mysql");
const config = require("./key");

const pool = mysql.createPool({
    connectionLimit: config.connectionLimit,
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database,
    port: config.port
});

exports.pool = pool;