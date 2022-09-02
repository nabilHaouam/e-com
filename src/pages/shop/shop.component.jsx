import './shop.styles.css'
import React from 'react'
import Cards from '../../components/cards/cards.component'
import {useState, useEffect} from 'react'

const Shop = ({products}) => {
  
  
  return (
    <div className='shop'>
        {products? <Cards products={products}/>: <p className='loading'>Loading Products...</p>}
        
    </div>
  )
}

export default Shop