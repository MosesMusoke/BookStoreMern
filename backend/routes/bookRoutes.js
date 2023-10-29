const express = require('express')

const router = express.Router()

const {getAllBooks, getASingleBook, createABook, updateABook, deleteABook} = require('../controllers/bookControllers.js')

router.get('/', getAllBooks)

router.get('/:id', getASingleBook)

router.post('/', createABook)

router.put('/:id', updateABook)

router.delete('/:id', deleteABook)


module.exports = router