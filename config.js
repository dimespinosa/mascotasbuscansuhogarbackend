let PORT = process.env.PORT || 8080;
let connectionString = "mongodb://localhost:27017/";
let dbName = "mascotasbuscansuhogar";
let fullUrl = connectionString + dbName;

module.exports = {
    PORT,
    connectionString,
    dbName,
    fullUrl,
};
