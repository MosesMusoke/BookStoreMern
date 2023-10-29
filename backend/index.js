const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const router = require('./routes/bookRoutes')
const cors = require('cors')

const PORT = process.env.PORT || 4000

const app = express()

app.use(express.json())
app.use(cors())

app.use('/api/books', router)

app.get('/', (req, res) => {
    return res.status(234).send('Welcome to Our Bookstore')
})



mongoose.connect(process.env.MONGODB_URI)
        .then(() => {
            app.listen(PORT, () => {
                console.log(`app listening on port ${PORT} and Connected to the Database`);
            })
        })
        .catch((error) => {
            console.log(error);
        })


