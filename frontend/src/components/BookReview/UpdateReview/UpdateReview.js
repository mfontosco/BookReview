import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleBookReviewAction, updateBookReviewAction } from '../../../redux/actions/BookReviewActions'
import { UPDATE_REVIEW_RESET } from '../../../redux/constants/BookConstants'
import styles from './UpdateReview.module.css'
import Navigation from '../../Navigation/Navigation'
import image3 from '../../Images/book3.jpg'

const UpdateReview = () => {
    const dispatch =useDispatch()
    const {id} =useParams()
    const navigate = useNavigate()
    const {bookreview} = useSelector((state)=>state.getBookReview)
    const {success} = useSelector((state)=>state.updateBookReview)
    const [title,setTitle] =useState("")
    const [author,setAuthor] =useState("")
    const [Isbn,setIsbn] =useState("")
    console.log(bookreview)

    useEffect(()=>{
if(success){
    dispatch({type:UPDATE_REVIEW_RESET})
    navigate("/review")
}
if(id){
dispatch(getSingleBookReviewAction(id))
}
    },[success,id,dispatch,navigate])
    
    useEffect(()=>{
      if(bookreview){
setTitle(bookreview ? bookreview.title :"")
setAuthor(bookreview ? bookreview.author :"")
setIsbn(bookreview ? bookreview.Isbn :"")
      }
    },[bookreview])

    const submitHandler =(e)=>{
        e.preventDefault()
       dispatch(updateBookReviewAction(id,title,author,Isbn))
   }
  return (
    <div className={styles.container}>
    <Navigation/>
    <div className={styles.image}><img src={image3} alt='' height='200px' width='200px'/></div>
       <div className={styles.formContainer}>
       <form>
        <div>
        <label htmlFor='title'>Title:</label>
        <input
                name='title'
                value={title}
                type='text'
                onChange={(e)=>setTitle(e.target.value)}
            />
        </div>
            <div>
            <label htmlFor='author'>Author:</label>
            <input
                name='author'
                value={author}
                type='text'
                onChange={(e)=>setAuthor(e.target.value)}
            />
            </div>
            
            <div>
            <label htmlFor='Isbn'>Isbn:</label>
            <input
                name='Isbn'
                value={Isbn}
                type='number'
                onChange={(e)=>setIsbn(e.target.value)}
            />
            </div>
            <div><button onClick={submitHandler}>Submit</button></div>
        </form>
       </div>
    </div>

  )
}

export default UpdateReview