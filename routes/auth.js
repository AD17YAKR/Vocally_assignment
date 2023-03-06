const express = require('express');
const {
    registerUser,
    loginUser,
    deleteUser
} = require('../controllers/auth');

const router = express.Router();

/**
 * @swagger
 * /auth/register/:
 *  post:
 *      summary: API to create New User
 *      description: API to create new user based on its role i.e whether he/she is a librarian or a Student
 *      requestBody:
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#components/schemas/User'
 *      responses:
 *              201:
 *                  description: Added Successfully
 *              404:
 *                  description: Book Already Present
 */
router.post('/register/', registerUser);
router.post('/login/', loginUser);
router.delete('/withdraw/', deleteUser);

module.exports = router;
