import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_ITEM,
} from './constant'

export const addToCart = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: id,
    })
  }
}

export const addQuantity = (id) => {
  return (dispatch) => {
    dispatch({
      type: ADD_QUANTITY,
      payload: id,
    })
  }
}

export const subtractQuantity = (id) => {
  return (dispatch) => {
    dispatch({
      type: SUBTRACT_QUANTITY,
      payload: id,
    })
  }
}

export const removeItem = (id) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_ITEM,
      payload: id,
    })
  }
}
