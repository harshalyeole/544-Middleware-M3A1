const sqlConfig = {
    server: "mysqlserver2391.database.windows.net",
    user: 'azureuser',
    password: 'Hy9877997',
    database: 'mySampleDatabase',
    pool: {
    idleTimeoutMillis: 60000
    },
    options:{
    encrypted: true,
    trustServerCertificate: false,
    useUTC: true
    }
    }
    module.exports = sqlConfig;