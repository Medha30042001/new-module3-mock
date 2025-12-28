import React from 'react'
import { useState } from 'react'

const Sidebar = ({onAddFleet}) => {

    const [regNo, setReg] = useState("");
    const [category, setCategory] = useState("")
    const [driver, setDriver] = useState("");
    const [avail, setAvail] = useState("")

    const handleAdd = () => {
        onAddFleet(prev => [...prev, {
            id:Date.now(), 
            regNo, category, driver, avail
        }])
    }

  return (
    <>
        <form action="">
            <input type="text"
            placeholder='Enter Reg No.'
            value={regNo}
            onChange={(e) => setReg(e.target.value)} />

            <select value={category} 
            onChange={(e) => setCategory(e.target.value)}>
                <option value="">Category</option>
                <option value="Auto">Auto</option>
                <option value="Car">Car</option>
                <option value="Truck">Truck</option>
                <option value="Bus">Bus</option>
            </select>

            <input type="text"
            placeholder='Enter Driver name'
            value={driver}
            onChange={(e) => setDriver(e.target.value)} />

            <select value={avail} 
                onChange={(e) => setAvail(e.target.value)}>
                <option value="">Availability</option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
            </select>

            <button onClick={handleAdd}>Add Fleet</button>
        </form>
    </>
  )
}

export default Sidebar