import React, { useContext } from 'react'

import { ProductContext } from '../../contexts/ProductContext'

import ProductCard from '../../components/product-card/ProductCard'
import './shop.scss'

const Shop = () => {

    const {products} = useContext(ProductContext)

  return (
    <div className='products-container'>
        {products.map((product)=> (
            <ProductCard key={product.key} product={product} />
        ))}
    </div>
  )
}

export default Shop