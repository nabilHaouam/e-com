import './card.styles.css'
import React from 'react';
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Card = ({product}) => {
    return (
    
        <div className='card'>
            <div className="img-box">
                <img src={product.image} alt="product" />
                 <ul className='action'>
                     <li>
                        <ShoppingCartIcon className="cart-icon" />
                        <span>Add to cart</span>
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="product-name">
                    <h3>{product.title}</h3>
                </div>
                <div className="price-rating">
                    <h2>${product.price}</h2>
                    <Rating name="read-only" value={product.rating.rate} readOnly />
                </div>
            </div>
           
        </div>


  )
}

export default Card