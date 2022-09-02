import './cards.styles.css'
import React from 'react'

import Card from '../card/card.component';

const Cards = ({products}) => {
  return (
    <div className='cards'>
       {products.map((product)=> <Card key={product.id} product={product}/>)}
    </div>
  )
}

export default Cards