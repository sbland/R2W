/*
 * Contains default config.
 * This can be overriden using environment variables
 */

module.exports = {
    DATABASE_URL: process.env.DATABASE_URL || 'localhost:9999', // Set this
    DATABASE_USER: process.env.DATABASE_USER || 'neo4j', // Set this
    DATABASE_PSWRD: process.env.DATABASE_PSWRD || 'NOTFORPRODUCTION',
    PORT: process.env.PORT || 5000,
    SECRET: process.env.SECRET || 'NOTFORPRODUCTION',
    CLIENT_KEY: process.env.CLIENT_KEY || 'NOTFORPRODUCTION',
    VERSION: process.env.npm_package_version || 'UNKNOWN VERSION',
  }