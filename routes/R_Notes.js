import express from 'express'
const router = express.Router()
import protect from '../middleware/auth.js'

import NotesController from '../controller/C_Notes.js'

router.get('/getAllNotes', protect, NotesController.getAllNotes);

export default router;