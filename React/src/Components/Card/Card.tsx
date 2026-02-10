import React from 'react'
import './Card.css'
interface Props{
  companyName: string;
  ticker: string;
  price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className='card'>
      <h2>{companyName}</h2>

      <div className='details'>
        <h2>{ticker}</h2>
        <p>{price}</p>
      </div>
        <p className='info'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
       
    </div>
  )
}

export default Card