const config={
    development:{
        use_env_variable:"localhost:1521/XEPDB1",
        dialect:'oracle',
        logging:false,
        dialectOptions:{
            connectString:"connection_string"
        }
    },
    testing: {
        use_env_variable: 'DATABASE_TEST_URL',
        dialect: 'oracle',  // Change dialect to 'oracle'
        logging: false,
        dialectOptions: {
          connectString: 'your-oracle-connect-string',  // Specify your Oracle connection string
          // other Oracle-specific options if needed
        },
      },
      production: {
        use_env_variable: 'DATABASE_URL',
        dialect: 'oracle',  // Change dialect to 'oracle'
        logging: false,
        dialectOptions: {
          connectString: 'your-oracle-connect-string',  // Specify your Oracle connection string
          // other Oracle-specific options if needed
        },
      },
}

module.exports = config;