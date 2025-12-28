import React from 'react'

const MainContent = ({fleet}) => {
  return (
    <>
        {fleet.map(item => (
            <div key={item.id}> 
                <h3>{item.regNo}</h3>
                <h3>{item.category}</h3>
                {item.category}
            </div>
        ))}
    </>
  )
}


export default MainContent