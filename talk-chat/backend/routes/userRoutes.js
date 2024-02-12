const express = require('express')
const { registerUser, authUser, allUsers } = require('../controller/userController')
const { protect } = require('../middlewares/authMiddleware')
const router = express.Router()

router.route('/').post(registerUser)
router.post('/login', authUser)
router.route("/").get(protect, allUsers);

module.exports = router