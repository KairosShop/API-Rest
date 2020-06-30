require('dotenv').config();

const config = {
    api: {
        port: process.env.PORT || 3000,
        cors: process.env.CORS || '*',
    },
    dev: process.env.NODE_ENV !== 'production',
    db: {
        URL: process.env.DB_URL,
        dbUser: process.env.DB_USER,
        dbPassword: process.env.DB_PASSWORD,
        dbHost: process.env.DB_HOST,
        dbName: process.env.DB_NAME
    },
    jwt: {
        secret: process.env.JWT_SECRET
    },
    sentry: {
        sentryDns: process.env.SENTRY_DNS,
        sentryId: process.env.SENTRY_ID
    }
};

module.exports =  config ;
