const express = require('express')
const router = express.Router()
const { addRoom, getRoom, editRoom, freeRooms } = require('../Controller/room')
router.route('/').post(addRoom).get(getRoom)
router.patch('/:id', editRoom)
router.get('/availableRooms', freeRooms)
module.exports = router
