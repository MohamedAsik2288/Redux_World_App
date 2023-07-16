import React from 'react'

const Card = ({country}) => {
  return (
   <div className='card'>
    <h1>{country.latlng}</h1>
   </div>
  )
}

export default Card;
