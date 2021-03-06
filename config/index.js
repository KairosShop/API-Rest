require('dotenv').config();

const config = {
  api: {
    port: process.env.PORT || 3000,
    cors: process.env.CORS || '*',
  },
  dev: process.env.NODE_ENV !== 'production',
  jwt: {
    secret: process.env.JWT_SECRET,
  },
  sentry: {
    sentryDns: process.env.SENTRY_DNS,
    sentryId: process.env.SENTRY_ID,
  },
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME_STAGING,
    dbDialect: process.env.DB_DIALECT,
    dialect: 'postgres',
    logging: true
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME_TEST,
    dbDialect: process.env.DB_DIALECT,
    dialect: 'postgres',
    logging: false
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    dbDialect: process.env.DB_DIALECT,
    dialect: 'postgres',
    logging: true
  },
  gcpstorage:{
    products: process.env.GCP_STORAGE_BUCKET_PRODUCTS,
    user:  process.env.GCP_STORAGE_BUCKET_USERS,
    invoice:  process.env.GCP_STORAGE_BUCKET_INVOICE,
    super: process.env.GCP_STORAGE_BUCKET_SUPER
  }
};

module.exports = config;
