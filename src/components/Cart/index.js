// import {useEffect, useState} from 'react'
import Header from '../Header'
import CartListView from '../CartListView'

import CartContext from '../../context/CartContext'
import EmptyCartView from '../EmptyCartView'

import './index.css'

const Cart = () => (
  // const [name, setName] = useState('')
  // useEffect(() => {
  //   const getData = async () => {
  //     const url = 'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
  //     const response = await fetch(url)
  //     const data = await response.json()
  //     console.log(data[0])
  //     setName(data[0].restaurant_name)
  //     console.log(data[0].restaurant_name)
  //   }
  //   getData()
  // }, [])
  // if (name.length === 0) {
  //   return <h1>Loading</h1>
  // }
  <CartContext.Consumer>
    {value => {
      const {cartList, removeAllCartItems} = value
      const showEmptyView = cartList.length === 0
      // TODO: Update the functionality to remove all the items in the cart
      const onRemoveAllCartItems = () => removeAllCartItems()
      return (
        <div className="cart-con">
          <div className="cart-container">
            {showEmptyView ? (
              <EmptyCartView />
            ) : (
              <>
                <Header
                  restaurantName="UNI Resto Cafe"
                  cart={cartList.length}
                />
                <div className="cart-content-container">
                  <h1 className="cart-heading">My Cart</h1>
                  <button
                    className="remove-all"
                    type="button"
                    onClick={onRemoveAllCartItems}
                  >
                    Remove All
                  </button>
                  <CartListView />
                </div>
              </>
            )}
          </div>
        </div>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
