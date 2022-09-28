import mongoose from 'mongoose'

const BookReviewSchema = mongoose.Schema({
    title:{type:String,required:[true,"title is required"]},
    author:{type:String,required:[true,"author is required"]},
    Isbn:{type:Number,required:[true,"Isbn is required"]}
})



const BookReview = mongoose.model("BookReview",BookReviewSchema)

export default BookReview