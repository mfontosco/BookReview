import {FormsScreen,HomeScreen,ReviewsScreen,NotFoundScreen,UpdateScreen} from './Index'
import { Routes,Route,Navigate } from 'react-router-dom'



const Router =()=>{
    return <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/create' element={<FormsScreen/>}/>
        <Route path='/review' element={<ReviewsScreen/>}/>
        <Route path='/review/:id/edit' element={<UpdateScreen/>}/>
        <Route path='/notfound' element={<NotFoundScreen/>}/>

        <Route path='*' element={<Navigate to='/notfound'/>}/>
    </Routes>
}

export default Router