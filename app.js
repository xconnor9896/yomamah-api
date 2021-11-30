// environment setup
require('dotenv').config();
require('express-async-errors');

// app essentials
const express = require('express');
const app = express();
const connectDB = require('./db/connect');

// security
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');

// routes
const authRouter = require('./routes/authRoutes');
const funnyLaughRouter = require('./routes/funnyLaughRoutes');

// YAML stuff
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocs = YAML.load('./swaws.yaml');

// middleware
const errorHandlerMiddleware = require('./middleware/error-handler');
const notFound = require('./middleware/not-found');
const auth = require('./middleware/auth');
const { load } = require('dotenv');

// other stuff
const port = process.env.PORT || 3000;

const minutes = 1000 * 60

// app parameters
app


    .set("trust proxy", 1)
    .use(rateLimiter({
        windowMs: 15 * minutes, // every 15 minutes
        max: 100 // limit IPs to 100 requests per windowMS
    }))
    .use([express.urlencoded({ extended: false }), express.json()])
    .use(helmet())
    .use(cors())
    .use(xss())
    // .get statement
    // routes
    .use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs))
    .use('/api/v1/auth', authRouter)
    .use('/api/v1/joke', auth, funnyLaughRouter)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`server listening at ${port}`);
        })
    } catch (err) {
        console.log(err)
    }
}

start();