import {useState} from 'react'
import CartContext from '../../context/CartContext'
import './index.css'

const VegIcon = () => (
  <div className="veg icon-border">
    <div className="veg icon-circle" />
  </div>
)

const NonVegIcon = () => (
  <div className="non-veg icon-border">
    <div className="non-veg icon-circle" />
  </div>
)

const DishItem = props => {
  const [quantity, setQuantity] = useState(0)
  const {itemDetails} = props
  const productData = {
    dishName: itemDetails.dish_name,
    dishImg: itemDetails.dish_image,
    id: itemDetails.dish_id,
    price: itemDetails.dish_price,
  }
  const decrement = () => {
    setQuantity(prev => (prev > 0 ? prev - 1 : prev))
  }
  const increment = () => {
    setQuantity(prev => prev + 1)
  }

  return (
    <CartContext.Consumer>
      {value => {
        const {addCartItem} = value
        const onAdd = () => {
          addCartItem({...productData, quantity})
        }
        return (
          <li className="dish-item">
            {itemDetails.dish_Type === 2 && <VegIcon />}
            {(itemDetails.dish_Type === 1 || itemDetails.dish_Type > 2) && (
              <NonVegIcon />
            )}
            <div className="info">
              <h1>{itemDetails.dish_name}</h1>
              <p className="price">{`${itemDetails.dish_currency} ${itemDetails.dish_price}`}</p>
              <p className="des">{itemDetails.dish_description}</p>
              {itemDetails.dish_Availability && (
                <div className="flex">
                  <div className="quantity">
                    <button type="button" onClick={decrement}>
                      -
                    </button>
                    <p data-testid="dish quantity">{quantity}</p>
                    <button type="button" onClick={increment}>
                      +
                    </button>
                  </div>
                  {quantity > 0 && (
                    <button
                      type="button"
                      className="add-to-cart-btn"
                      onClick={onAdd}
                    >
                      ADD TO CART
                    </button>
                  )}
                </div>
              )}
              {!itemDetails.dish_Availability && (
                <p className="not-available">Not available</p>
              )}
              {itemDetails.addonCat.length > 0 && (
                <p className="add-on">Customizations available</p>
              )}
            </div>
            <p className="calories">{itemDetails.dish_calories} calories</p>
            <div className="img-con">
              <img src={itemDetails.dish_image} alt={itemDetails.dish_name} />
            </div>
          </li>
        )
      }}
    </CartContext.Consumer>
  )
}

const Dishes = props => {
  const {dishesList} = props
  return (
    <div className="dishes">
      <ul className="dishes-list">
        {dishesList.map(item => (
          <DishItem itemDetails={item} key={item.dish_id} />
        ))}
      </ul>
    </div>
  )
}

export default Dishes
