import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import configureStore from './redux/store'

let grid = Array(...Array(30)).map(() => Array(30).fill('#FFFFFF'));
let initialState = {
    pallete: {
        colorChoices: ['#FFFFFF', '#000000', '#a2cd5a', '#9adbe9', '#d22727', '#2ECC71',
        '#DAF7A6', '#FFC300', '#FF5733', '#C70039', '#900C3F', '#C39BD3', '#45B39D'
        ],
        activeColor: '#000000'
    },
    canvas: {
        cellGrid: grid
    }
}

let store = configureStore(initialState)

ReactDom.render(
    <Provider store={store}>
        <Home/>
    </Provider>,
    document.getElementById('wrapper')
)