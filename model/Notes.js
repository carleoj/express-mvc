import db from '../config/db.js'

const NotesModel = {

    async getAllNotes(){
        const query = `SELECT * FROM notes`;
        const [result] = await db.execute(query);
        return result;
    }
}

export default NotesModel