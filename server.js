import express from "express"
import { configDotenv } from "dotenv"
import connectDB from "./db.js"
import productsRoute from "./Routes/productsRoute.js"
configDotenv()
connectDB()
const app = express()
app.use(express.json())
app.use("/api/products", productsRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT} 💥`));