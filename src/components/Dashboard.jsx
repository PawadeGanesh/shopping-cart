import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../actions/index'
import { useHistory } from 'react-router-dom'

const Dashboard = ({ itemsList, addToCart }) => {
  const history = useHistory()

  const handleClick = (id) => {
    addToCart(id)
    history.push('/main')
  }

  return (
    <div className="container mt-5">
      {itemsList &&
        itemsList.map((item) => {
          return (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.img} alt={item.title} />
                <h3 className="card-title">{item.title}</h3>
                <button
                  className="btn btn-primary"
                  onClick={() => handleClick(item.id)}
                >
                  Add to Cart
                </button>
              </div>

              <div className="card-content">
                <p>
                  <b>Price: {item.price}Rs</b>
                </p>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default connect((state) => ({ itemsList: state.cartReducer.items }), {
  addToCart,
})(Dashboard)
