const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Contacts Project',
    description: 'This is the contacts project',
  },
  host: 'naifcse341.onrender.com',
  schemes: ['https'],
};

const outputFile = './swagger.json';

const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);

/*
swaggerAutogen(outputFile, endpointsFiles, doc).then(async () => {
  await import('./index.js');
});
*/