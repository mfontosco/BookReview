import React, { useEffect } from 'react'
import styles from './Reviews.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteBookReviewAction, getAllBookReviewsActions } from '../../../redux/actions/BookReviewActions'
import { DELETE_REVIEW_RESET } from '../../../redux/constants/BookConstants'
import Navigation from '../../Navigation/Navigation'
import {FiEdit3} from  'react-icons/fi'
import {MdOutlineDelete} from 'react-icons/md'

const Reviews = () => {
    const dispatch = useDispatch()
    const {bookreview}=useSelector((state)=>state.getBookReviews)
    const {success} = useSelector((state)=>state.deleteBookReview)
    console.log(bookreview)
    useEffect(()=>{
        if(success){
            dispatch({type:DELETE_REVIEW_RESET})
            dispatch(getAllBookReviewsActions())
        }else{
            dispatch(getAllBookReviewsActions())
        }

    },[dispatch,success])

    const deleteHandler =(id)=>{
        dispatch(deleteBookReviewAction(id))
    }
  return (
    <div className={styles.container}>
    <Navigation/>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Isbn</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        {bookreview && bookreview.length > 0 && bookreview.map((book,i)=>(
            <tr key={i}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.Isbn}</td>
            <td>
            <div className={styles.btn}>
            <button onClick={()=>deleteHandler(book._id)}><MdOutlineDelete className={styles.delete}  size={20}/></button>
            <Link to={`/review/${book._id}/edit`}>
            <button><FiEdit3 className={styles.view}  size={20}/></button>
            </Link>
            </div>
            </td>
        </tr>
            
        ))}
       
    </tbody>
        
        </table>
    </div>
  )
}

export default Reviews