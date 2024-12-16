module.exports = {
  loadBalancer: {
    strategy: 'round-robin',
    instances: [
      {
        name: 'app-instance-1',
        host: 'app1.example.com',
        port: 3000,
      },
      {
        name: 'app-instance-2',
        host: 'app2.example.com',
        port: 3000,
      },
      {
        name: 'app-instance-3',
        host: 'app3.example.com',
        port: 3000,
      },
    ],
    healthCheck: {
      interval: 30000,
      timeout: 5000,
      retries: 3,
    },
    logging: {
      level: 'info',
      format: 'json',
    },
  },
};
