import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import mainPageReducer from "../MainPage/reducers/mainPageReducer"

export default combineReducers({
  routing: routerReducer,
  mainPageReducer,
})
