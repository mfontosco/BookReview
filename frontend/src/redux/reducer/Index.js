import {combineReducers} from 'redux'
import { getAllBooksReducer,
    getSingleBookReducer,
    createBookReducer,
    updateBookReducer,
    deleteBookReducer,
 } from '../reducer/BookReviewReducer'

 const rootReducers = combineReducers({
    getBookReviews:getAllBooksReducer,
    createBookReview:createBookReducer,
    getBookReview:getSingleBookReducer,
    updateBookReview:updateBookReducer,
    deleteBookReview:deleteBookReducer
 })

 export default rootReducers