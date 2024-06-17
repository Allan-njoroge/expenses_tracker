const express = require('express')
const router = express.Router()

router.post('/register', async(req, res) => {
    try{
        const user = `SELECT * FROM users WHERE email_address = ?`
        db.query(query, [email_address], (err, data) => {
            if(err) return res.status(400).json("There was an error")

            if(user.length != 0){
                return res.status(400).json("This user already exists")
            }

            const addNew = `
                INSERT INTO users
                WHERE (full_name, email_address)
                VALUES (?)
            `
        })
    }
    catch (err) {
        console.log(err)
    }
})