const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
      title: 'Contacts Project',
      description: 'This is the contacts project',
    },
    host: 'localhost:3000',
    schemes: ['http'],
};
  
const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

/*
swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./index.js');
});
*/