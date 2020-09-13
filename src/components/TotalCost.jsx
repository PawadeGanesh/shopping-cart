import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Total = ({ totalCost }) => {
  const history = useHistory()

  const handleCheckout = () => {
    history.push('/main')
    window.location.reload(false)
  }
  return (
    <div className="container">
      <div className="collection">
        <li className="collection-item"></li>
        <li className="collection-item">
          <b>Total: {totalCost} Rs</b>
        </li>
      </div>
      <div className="checkout">
        <button className="btn btn-info" onClick={handleCheckout}>
          Checkout
        </button>
      </div>
    </div>
  )
}

export default connect((state) => ({ totalCost: state.cartReducer.total }))(
  Total,
)
