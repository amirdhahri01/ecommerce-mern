import express from "express"
import { configDotenv } from "dotenv"
configDotenv()

const app = express()

app.get("/" , (req, res) => {
    res.send("This i from backend")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT,() => console.log(`Server running on port ${PORT} 💥`));