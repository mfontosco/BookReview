
import React, { useEffect, useState } from 'react'
import styles from './Forms.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { createBookReviewAtions } from '../../../redux/actions/BookReviewActions'
import { CREATE_REVIEW_RESET } from '../../../redux/constants/BookConstants'
import Navigation from '../../Navigation/Navigation'
import image3 from '../../Images/book3.jpg'

const Forms = () => {
    const dispatch =useDispatch()
    const navigate =useNavigate()
    const {success}=useSelector((state)=>state.createBookReview)
    const [state,setState] =useState({
        title:"",
        author:"",
        Isbn:""
    })
    useEffect(()=>{
if(success){
    dispatch({type:CREATE_REVIEW_RESET})
    navigate('/review')
}
    },[dispatch,success,navigate])
const changeHandler = (e)=>{
    const {name,value}=e.target

    setState({...state,[name]:value})
}
const submitHandler =(e)=>{
     e.preventDefault()
    const {title,author,Isbn} = state
    dispatch(createBookReviewAtions(title,author,Isbn))
}
  return (
    <div className={styles.container}>
    <Navigation/>
    <div className={styles.image}><img src={image3} alt='' height='160px' width='160px'/></div>
       <div className={styles.formContainer}>
       <form>
        <div>
        <label htmlFor='title'>Title:</label>
        <input
                name='title'
                value={state.title}
                type='text'
                onChange={changeHandler}
            />
        </div>
            <div>
            <label htmlFor='author'>Author:</label>
            <input
                name='author'
                value={state.author}
                type='text'
                onChange={changeHandler}
            />
            </div>
            
            <div>
            <label htmlFor='Isbn'>Isbn:</label>
            <input
                name='Isbn'
                value={state.Isbn}
                type='number'
                onChange={changeHandler}
            />
            </div>
            <div><button onClick={submitHandler}>Submit</button></div>
        </form>
       </div>
    </div>
  )
}

export default Forms