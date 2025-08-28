const express = require('express')
const { register, login, updateProfile } = require('../controllers/authController')
const { protect } = require('../middlewear/authMiddlewear')

const router = express.Router()

router.post('/register', register)
router.post('/login', login)
router.put('/update-profile', protect, updateProfile)

module.exports = router
