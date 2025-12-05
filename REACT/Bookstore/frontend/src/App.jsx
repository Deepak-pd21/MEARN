import { Route, Routes } from 'react-router-dom'
import Home from './users/pages/Home'
import Auth from './pages/Auth'
import PagenotFound from'./pages/PagenotFound'
import Preloader from './components/Preloader'
import { useEffect, useState } from 'react'

function App() {

  const [loading,setLoading] = useState(false)

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(true)
    },7000)
  },[])
  
  return (
    <>

    <Routes>
      <Route path='/' element={loading ? <Home/> : <Preloader/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/register' element={<Auth/>}/>
      <Route path='*' element={<PagenotFound/>}/>
    </Routes>
    </>
  )
}

export default App
