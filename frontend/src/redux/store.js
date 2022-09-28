import rootReducers from "./reducer/Index";
import {composeWithDevTools} from 'redux-devtools-extension'
import  thunk from 'redux-thunk'
import { createStore,applyMiddleware } from "redux";

const middleware =[thunk]
let devTools;
if(process.env.NODE_ENV === "development"){
    devTools = composeWithDevTools(applyMiddleware(...middleware))
}else{
    devTools= applyMiddleware(...middleware)
}



const store =createStore(rootReducers,devTools)

export default store