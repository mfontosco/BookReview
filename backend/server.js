import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import connectDB from './config/db.js';
import BookReviewRouter from './routes/BookReviewRoute.js'

const app =express()

app.use(express.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("dev"))
app.use('/api/v1/bookreview',BookReviewRouter)



const start = async(Port)=>{
    try {
        const conn = await connectDB()
        app.listen(Port,(err)=>{
            if(err){
                throw new Error(err)
            }
                console.log(`server is listening on port ${Port}`)
            })
        console.log(`app is connected to ${conn.connection.host}`)
    } catch (err) {
       console.log(err) 
    }
}
const Port = 8000
start(Port)

