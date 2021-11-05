const sql = require('mssql');
const config = {user: 'userApi', 
password: 'userApi',
server: 'DESKTOP-FLS61V6',
database: 'IF6201_B53953_B63817_',
options: {
trustedconection: false,
enableArithAbort: true,
encrypt: false,
}
}; 
exports.config = config;
exports.sql = sql;
