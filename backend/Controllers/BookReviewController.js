import BookReview from '../Models/BookReview.js'

const getAllBookReviews = async(req,res)=>{
    try {
        const bookreviews = await BookReview.find().sort({_id:-1})
        if(!bookreviews){
            throw Error("Not Book Review Found")
        }
        res.status(200).json({
            status:"success",
            bookreviews,
        })
    } catch (err) {
        console.log(err)
        res.status.json({
            status:"failed",
            error:err.message
        })
    }
    
}
const createBookReview = async(req,res)=>{
    const {title,author,Isbn} = req.body;

    try {
        const bookreview = await BookReview.create({
            title,
            author,
            Isbn
        })
        res.status(200).json({
            status:"success",
            bookreview
        })
    } catch (err) {
        console.log(err)
        res.status(402).json({
            status:"failed",
            error:err
        })
    }
}
const updateBookReview = async(req,res)=>{
    const {title,author,Isbn} =req.body
    const {id} =req.params
    try {
      const bookreview =await BookReview.findById({_id:id})
      if(title){
        bookreview.title = title;
      }  
      if(author){
bookreview.author =author
      }
      if(Isbn){
        bookreview.Isbn =Isbn
      }
      await bookreview.save()

      res.status(200).json({
        status:"success",
        bookreview
      })
    } catch (err) {
        console.log(err.message)
        res.status(402).json({
            statu:"failed",
            error:err.message
        })
    }
}
const getSingleBookReview = async(req,res)=>{
    const {id} =req.params
    try {
      const bookreview = await BookReview.findById({_id:id})
  if(!bookreview){
    throw Error("Book Review not found")
  }
      res.status(200).json({
        status:"success",
        bookreview
      })
    } catch (err) {
        console.log(err.message)
        res.status(402).json({
            status:"failed",
            error:err.message
        })
    }
}
const deleteBookReview = async(req,res)=>{
    const {id} =req.params
    try {
      const bookreview =await BookReview.findByIdAndRemove({_id:id})
      
      res.status(200).json({
        status:"success",
        message:"successfully deleted"
      })
    } catch (err) {
        console.log(err.message)
        res.status(402).json({
            statu:"failed",
            error:err.message
        })
    }
}
export {getAllBookReviews,createBookReview,updateBookReview,getSingleBookReview,deleteBookReview}