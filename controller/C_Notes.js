import asyncHandler from 'express-async-handler'

import NotesModel from '../model/Notes.js'

const NotesController = {

    getAllNotes: asyncHandler(async (req, res) => {
        const result = await NotesModel.getAllNotes()
        res.status(200).json({
            data: result
        })
    })
}

export default NotesController