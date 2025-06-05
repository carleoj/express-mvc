import db from '../config/db.js'

const UserModel = {

    async getUsers(){
        const query = `SELECT * FROM users`;
        const [result] = await db.execute(query)
        return result;
    },

    async getUserByUsername(username){
        const query = `SELECT * FROM users WHERE username = ?`;
        const [result] = await db.execute(query, [username]);
        return result[0];
    },

    async getUserById(id){
        const query = `SELECT * FROM users WHERE id = ?`;
        const [result] = await db.execute(query, [id]);
        return result[0];
    },

    async login(username, password){
        const query = `SELECT * FROM users WHERE username = ? AND password = ?`
        const result = await db.execute(query, [username, password])
        return result;
    },

    async createUser(name, username, hashedPassword){
        const query = `INSERT into users (name, username, password) VALUES (?, ?, ?)`;
        const [result] = await db.execute(query, [name, username, hashedPassword])
        return result;
    }
}

export default UserModel