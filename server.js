import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./db.js"
import productsRoute from "./Routes/productsRoute.js"
configDotenv()
connectDB()
const app = express()
app.use(express.urlencoded({ extended: false }))
app.use("/api/products", productsRoute);

app.get("/", (req, res) => {
    res.send("This i from backend")
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 💥`));