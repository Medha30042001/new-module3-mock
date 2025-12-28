import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { useState } from 'react'

const Admin = () => {
    const [fleet, setFleet] = useState([]);

    const addFleet = (newFleet) => {
        setFleet(prev => [...prev, newFleet]);
    }
  return (
    <>
    <Navbar />
    <Sidebar onAddFleet={addFleet} />
    <MainContent fleet={fleet} />
    </>
  )
}

export default Admin