const mysql = require('mysql')

db = mysql.createConnection({
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    host:'developer-routes.cj71ej8skdip.ap-south-1.rds.amazonaws.com',
    database:"DeveloperRoutes"
})

module.exports = db
