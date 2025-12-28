import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Admin from './components/Admin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* unprotected routes */}
          <Route path='/' element={<Login />} />

          {/* protected routes */}
          <Route path='/admin' element={
            <ProtectedRoute>
              <Admin/>
            </ProtectedRoute>
          } />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
