const mongoose = require("mongoose")
const dbHost = process.env.DB_HOST

mongoose.connect(dbHost, {
    useNewUrlParser: true
})

mongoose.set("useCreateIndex", true)
