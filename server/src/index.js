import app from "./app.js";
import dotenv from 'dotenv'
import ConnectDB from "./database/db.js";

dotenv.config()
const PORT = process.env.PORT || 8000
ConnectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log('Server start')
        })
    })
    .catch(() => {
        console.log('Error while starting server')
    })