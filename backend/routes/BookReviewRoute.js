import express from 'express'
import {getAllBookReviews,createBookReview,updateBookReview,getSingleBookReview,deleteBookReview} from  '../Controllers/BookReviewController.js'
 
const router = express.Router()

router.route("/").get(getAllBookReviews).post(createBookReview)
router.route("/:id").put(updateBookReview).get(getSingleBookReview).delete(deleteBookReview)

export default router