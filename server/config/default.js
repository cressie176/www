module.exports = {
  server: {
    host: '0.0.0.0',
    port: 3000,
  },
  routes: {
    proxy: {
      routes: {},
    },
  },
  logger: {
    include: [
      'tracer',
      'timestamp',
      'level',
      'message',
      'error.message',
      'error.code',
      'error.stack',
      'request.url',
      'request.headers',
      'request.params',
      'request.method',
      'response.statusCode',
      'response.headers',
      'response.time',
      'process',
      'system',
      'package.name',
      'app',
    ],
    exclude: [
      'password',
      'secret',
      'token',
      'request.headers.cookie',
      'dependencies',
      'devDependencies',
    ],
  },
};
