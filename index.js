import app from "./app.js"
import connectDB from './data/database.js'

connectDB()

app.listen(5001, ()=> {
    console.log("server is working");
} );
