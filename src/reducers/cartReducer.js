import Item1 from '../images/item1.jpg'
import Item2 from '../images/item2.jpg'
import Item3 from '../images/item3.jpg'
import Item4 from '../images/item4.jpg'
import Item5 from '../images/item5.jpg'
import Item6 from '../images/item6.jpg'
import {
  ADD_TO_CART,
  ADD_QUANTITY,
  SUBTRACT_QUANTITY,
  REMOVE_ITEM,
} from '../actions/constant'

const initialState = {
  items: [
    { id: 1, title: 'Winter body', price: 1100, img: Item1 },
    { id: 2, title: 'Adidas', price: 800, img: Item2 },
    { id: 3, title: 'Vans', price: 1200, img: Item3 },
    { id: 4, title: 'White', price: 2600, img: Item4 },
    { id: 5, title: 'Cropped-sho', price: 1600, img: Item5 },
    { id: 6, title: 'Blues', price: 900, img: Item6 },
  ],
  addedItems: [],
  total: 0,
}

export const cartReducer = (state = initialState, action) => {
  console.log('action', action.payload)
  switch (action.type) {
    case ADD_TO_CART: {
      let addedItem = state.items.find((item) => item.id === action.payload)
      let existedItem = state.addedItems.find(
        (item) => action.payload === item.id,
      )
      if (existedItem) {
        addedItem.quantity += 1
        return { ...state, total: state.total + addedItem.price }
      } else {
        addedItem.quantity = 1
        let newTotal = state.total + addedItem.price
        return {
          ...state,
          addedItems: [...state.addedItems, addedItem],
          total: newTotal,
        }
      }
    }

    case ADD_QUANTITY: {
      let addedItem = state.items.find((item) => item.id === action.payload)
      addedItem.quantity += 1
      let newTotal = state.total + addedItem.price
      return {
        ...state,
        total: newTotal,
      }
    }

    case SUBTRACT_QUANTITY: {
      let addedItem = state.items.find((item) => item.id === action.payload)
      if (addedItem.quantity === 1) {
        let new_items = state.addedItems.filter(
          (item) => item.id !== action.payload,
        )
        let newTotal = state.total - addedItem.price
        return {
          ...state,
          addedItems: new_items,
          total: newTotal,
        }
      } else {
        addedItem.quantity -= 1
        let newTotal = state.total - addedItem.price
        return {
          ...state,
          total: newTotal,
        }
      }
    }

    case REMOVE_ITEM: {
      let itemToRemove = state.addedItems.find(
        (item) => item.id === action.payload,
      )
      let new_items = state.addedItems.filter(
        (item) => item.id !== action.payload,
      )

      let newTotal = state.total - itemToRemove.price * itemToRemove.quantity
      console.log(itemToRemove)
      return {
        ...state,
        addedItems: new_items,
        total: newTotal,
      }
    }

    default:
      return { ...state }
  }
}
