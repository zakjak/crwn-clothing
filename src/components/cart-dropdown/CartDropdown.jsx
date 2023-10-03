import React from 'react'

import './cart-dropdown.scss'
import Button from '../button/button'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            <Button>GO TO CHECKOUT</Button>
        </div>
    </div>
  )
}

export default CartDropdown