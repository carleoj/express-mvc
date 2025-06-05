import express from 'express'
const router = express.Router()
import protect from '../middleware/auth.js'
import UserController from '../controller/C_User.js'

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Log in a user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Login successful
*/
router.post('/login', UserController.login);


/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Sign up a user
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - username
 *               - password
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Missing or invalid parameters
 */
router.post('/signup', UserController.signup);


/**
 * @swagger
 * /getUsers:
 *   get:
 *     summary: Fetch all user accounts
 *     tags:
 *       - Users
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 *                   username:
 *                     type: string
 *       401:
 *         description: Unauthorized — token missing or invalid
 */
router.get('/getUsers', protect, UserController.getUsers);


router.get('/getUserById/:id', protect, UserController.getUserById);


export default router