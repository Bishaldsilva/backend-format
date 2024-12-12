import dotenv from "dotenv"
dotenv.config({
    path: './.env'
});

import connectDb from "./db/db.js"
import app from "./app.js"

connectDb()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
    })
})