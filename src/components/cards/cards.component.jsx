import './cards.styles.css'
import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../card/card.component';

const Cards = ({products}) => {
  return (
    <div className='cards'>
       {products.map((product)=> {
          var slug = product.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
          return <Link to={`/e-com/${slug}`} key={product.id}><Card key={product.id} product={product}/></Link>}
          )
       }
    </div>
  )
}

export default Cards