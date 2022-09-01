import './cards.styles.css'
import React from 'react'

import Card from '../card/card.component';

const Cards = ({products}) => {
  return (
    <div className='cards'>
       {products? products.map((product)=> <Card key={product.id} product={product}/>) : null}
    </div>
  )
}

export default Cards