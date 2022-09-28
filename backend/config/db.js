import mongoose from 'mongoose'

const connectDB = () =>{
 return mongoose.connect(process.env.MONGODBURI)
}

export default connectDB