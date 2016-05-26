import { applyMiddleware, compose, createStore } from 'redux'
import rootReducer from './reducers/index'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let finalCreateStore = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)


export default function configureStore(initialState = {}) {
  return finalCreateStore(rootReducer, initialState)
}