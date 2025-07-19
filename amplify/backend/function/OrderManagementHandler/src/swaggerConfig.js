const swaggerJsDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Order Management',
            version: '1.0.0',
            description: 'Order Management',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: [__dirname + '/app.js'], // Paths to files containing JSDoc comments
};

const swaggerSpec = swaggerJsDoc(options);

module.exports = swaggerSpec;