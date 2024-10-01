import { Route, Routes } from 'react-router-dom'
import { Dashboard, SinglePage } from '../pages'

const CustomRoutes = () => {
  return (
   <Routes>
    <Route path='/' element={<Dashboard />}/>
    <Route path='/single-page' element={< SinglePage/>}/>
   </Routes>
  )
}

export default CustomRoutes