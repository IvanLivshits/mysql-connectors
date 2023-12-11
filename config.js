export default {
    connections: {
      MySQL: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database: 'cdp',
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0,
      },
    },
  };
  
