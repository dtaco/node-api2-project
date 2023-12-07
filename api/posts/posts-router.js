// implement your posts router here
const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.json('foo')
})
router.get('/', (req,res) => {

})
router.post('/', (req,res) => {

})
router.put('/', (req,res) => {

})
router.delete('/:id', (req,res) => {

})
router.get('/:id/comments', (req,res) => {

})


module.exports = router