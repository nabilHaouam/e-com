import './single-product.styles.css'
import React from 'react'
import Card from '../../components/card/card.component'

const SingleProduct = ({product}) => {
  return (
    <div className='single-product'>
        <Card className={"product-card"} singleProductPage={true} product={product}/>   
    </div>
  )
}

export default SingleProduct