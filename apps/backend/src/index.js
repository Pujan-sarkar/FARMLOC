const express = require('express')
const cookie = require('cookie-parser')
const compression = require('compression')
const helmet = require('helmet')
const mongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const cors = require('cors')
const CheckError = require('./utils/checkError')
const limiter = require('./utils/rateLimiter')
const addLogger = require('./utils/addLogger')
const { testRoute } = require('./controllers/authController')
const { config } = require('./configs/config')
const cors = require('cors')
const authRouter = require('./routes/authRoutes')
const emailrouter = require("./routes/emailroutes")

const app = express()
require('./database/connectDB')

app.use(cors({}))
app.use(express.json())
app.use(compression())

// CORS configuration
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With']
}))

app.use(xss())
app.use(mongoSanitize())
app.use(helmet())
app.use(limiter)
app.use(cookie())

addLogger(app)

app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '1; mode=block')
    next()
})

app.get('/', testRoute)
app.use('/api/auth', authRouter);
app.use('/api/send-email' , emailrouter)
app.all('*', (req, res) => {
    const error = new CheckError(
        `Can't find ${req.originalUrl} on this server!`,
        404
    )
    res.status(error.statusCode).json({
        success: false,
        error: error.message,
    })
})

app.listen(config.PORT, () => {
    console.log(`[⚡] Server Is Running on http://localhost:${config.PORT}`)
})

module.exports = { app }
