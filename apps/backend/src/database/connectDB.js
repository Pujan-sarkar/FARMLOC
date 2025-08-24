const mongoose = require('mongoose')
const { config } = require('../configs/config')

mongoose
    .connect(config.MONGOURI)
    .then(() => {
        console.log(`MongoDB Connected!`)
    })
    .catch((e) => {
        console.log(`Connection Error - ${e}`)
    })
