const config = require('./config')
const mongoose = require('mongoose')

async function main(app) {
    try {
        const db = await mongoose.connect(config.dbUrl, { 
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })//.then(e => console.log(e)).catch(err => console.log(err))
        return app.listen(config.port, () => console.log(`Listen on port ${config.port}`))
    } catch (error) {
        console.log(error)
        return new Error('App initailization failed')
    }
}

module.exports = main
