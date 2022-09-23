const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'W04 Team Assignment',
      description: 'This is the w04 team assignment',
    },
    host: 'localhost:8080',
    schemes: ['http'],
};
  
const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

//swaggerAutogen(outputFile, endpointsFiles, doc);

swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./index.js');
});