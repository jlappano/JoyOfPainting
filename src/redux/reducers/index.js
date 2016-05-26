import { combineReducers } from 'redux'
import canvasReducer from './canvasReducer'
import palleteReducer from './palleteReducer'

const rootReducer = combineReducers({
  pallete: palleteReducer,
  canvas: canvasReducer
})

export default rootReducer