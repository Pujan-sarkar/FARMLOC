const jwt = require('jsonwebtoken')
const { config } = require('../configs/config')
const UserModel = require('../models/userSchema')

const protect = async (req, res, next) => {
    try {
        let token

        // Check for token in Authorization header
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
            token = req.headers.authorization.split(' ')[1]
        }
        // Check for token in cookies
        else if (req.cookies.jwt) {
            token = req.cookies.jwt
        }

        if (!token) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route'
            })
        }

        try {
            // Verify token
            const decoded = jwt.verify(token, config.JWT_SECRET)
            
            // Get user from token
            const user = await UserModel.findById(decoded.userId).select('-password -cpassword')
            
            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: 'User no longer exists'
                })
            }

            // Add user info to request
            req.user = user
            req.userId = decoded.userId
            next()
        } catch (error) {
            return res.status(401).json({
                success: false,
                message: 'Not authorized to access this route'
            })
        }
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Server error'
        })
    }
}

module.exports = { protect }
