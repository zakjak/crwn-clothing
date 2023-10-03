import React, { Fragment, useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Outlet, Link } from 'react-router-dom'
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.scss'

import { CartContext } from '../../contexts/CartContext'

import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropdown from '../../components/cart-dropdown/CartDropdown'

import { signOut } from 'firebase/auth'

const Navigation = () => {
  const { currentUser } = useContext(UserContext)

  const { isCartOpen } = useContext(CartContext)
  
    return (
      <Fragment>
        <div className='navigation'>
            <Link className='logo-container' to='/'>
                <CrwnLogo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    Shop
                </Link>
                {currentUser ? (
                  <span className='nav-link' onClick={signOut}>
                    SIGNOUT
                  </span>
                ) : (
                <Link className='nav-link' to='/auth'>
                  Sign In
                </Link>
                )}
                <CartIcon />
            </div>
            {!isCartOpen && (
              <CartDropdown />
            )} 
        </div>
        <Outlet />
      </Fragment>
    )
  }

export default Navigation