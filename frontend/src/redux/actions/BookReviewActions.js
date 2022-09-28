import {
    CREATE_REVIEW_REQUEST,
    CREATE_REVIEW_SUCCESS,
    CREATE_REVIEW_FAIL,
    GET_REVIEW_FAIL,
    GET_REVIEW_REQUEST,
    GET_REVIEW_SUCCESS,
    GET_SINGLE_REVIEW_FAIL,
    GET_SINGLE_REVIEW_SUCCESS,
    GET_SINGLE_REVIEW_REQUEST,
    UPDATE_REVIEW_FAIL,
    UPDATE_REVIEW_REQUEST,
    UPDATE_REVIEW_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS
} from '../constants/BookConstants'
import axios from 'axios'

const baseUrl = "http://localhost:8000/api/v1/bookreview"

const createBookReviewAtions = (title,author,Isbn)=>async(dispatch)=>{
try {
    dispatch({type:CREATE_REVIEW_REQUEST})
    const config ={
        headers:{
            "content-type":"application/json"
        }
    }

    const {data} = await axios.post(`${baseUrl}`,{title,author,Isbn},config)
    console.log(data)
    dispatch({
        type:CREATE_REVIEW_SUCCESS,
        payload:data.bookreview
    })
} catch (err) {
    console.log(err)
    let message =err.response && err.response.data.message ? err.response.data.message :err.message
    dispatch({
        type:CREATE_REVIEW_FAIL,
        payload:message
    })
}

}

const getAllBookReviewsActions = ()=>async(dispatch)=>{
    try{
        dispatch({type:GET_REVIEW_REQUEST})
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        const {data} = await axios.get(`${baseUrl}`,config)
        console.log(data.bookreviews)
        dispatch({
            type:GET_REVIEW_SUCCESS,
            payload:data.bookreviews
        })
    
    }catch(err){
        console.log(err)
        let message =err.response && err.response.data.message ? err.response.data.message :err.message
        dispatch({
            type:GET_REVIEW_FAIL,
            payload:message
        })
    }
}
const updateBookReviewAction = (id,title,author,Isbn)=>async(dispatch)=>{
    try{
        dispatch({type:UPDATE_REVIEW_REQUEST})
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        const {data} = await axios.put(`${baseUrl}/${id}`,{title,author,Isbn},config)
        console.log(data)
        dispatch({
            type:UPDATE_REVIEW_SUCCESS,
            payload:data.bookreview
        })
    
    }catch(err){
        console.log(err)
        let message =err.response && err.response.data.message ? err.response.data.message :err.message
        dispatch({
            type:UPDATE_REVIEW_FAIL,
            payload:message
        })
    }
}

const getSingleBookReviewAction = (id)=>async(dispatch)=>{
    try{
        dispatch({type:GET_SINGLE_REVIEW_REQUEST})
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        const {data} = await axios.get(`${baseUrl}/${id}`,config)
        console.log(data)
        dispatch({
            type:GET_SINGLE_REVIEW_SUCCESS,
            payload:data.bookreview
        })
    
    }catch(err){
        console.log(err)
        let message =err.response && err.response.data.message ? err.response.data.message :err.message
        dispatch({
            type:GET_SINGLE_REVIEW_FAIL,
            payload:message
        })
    }
}
const deleteBookReviewAction = (id)=>async(dispatch)=>{
    try{
        dispatch({type:DELETE_REVIEW_REQUEST})
        const config = {
            headers:{
                "content-type":"application/json"
            }
        }
        const {data} = await axios.delete(`${baseUrl}/${id}`,config)
        console.log(data)
        dispatch({
            type:DELETE_REVIEW_SUCCESS,
            payload:data.message
        })
    
    }catch(err){
        console.log(err)
        let message =err.response && err.response.data.message ? err.response.data.message :err.message
        dispatch({
            type:DELETE_REVIEW_FAIL,
            payload:message
        })
    }
}
export {getSingleBookReviewAction,updateBookReviewAction,deleteBookReviewAction,createBookReviewAtions,getAllBookReviewsActions}