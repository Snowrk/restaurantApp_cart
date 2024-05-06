import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const {restaurantName, cart} = props
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <Link to="/" className="link">
        <h1>{restaurantName}</h1>
      </Link>
      <p className="myorders">My Orders</p>
      <Link to="/cart" className="nav-link">
        <button type="button" className="btn" data-testid="cart">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-bar-img"
          />
        </button>
      </Link>
      <span className="cart-count-badge">{cart}</span>
      <button
        type="button"
        className="logout-desktop-btn"
        onClick={onClickLogout}
      >
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
