import './shop.styles.css'
import React from 'react'
import Cards from '../../components/cards/cards.component'
import {useState, useEffect} from 'react'

const Shop = () => {
  const [products, setProducts] = useState(null)
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
  
    
  }, [])
  
  return (
    <div className='shop'>
        {products? <Cards products={products}/>: <p>couldn't get products</p>}
        
    </div>
  )
}

export default Shop