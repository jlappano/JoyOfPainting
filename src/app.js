import 'babel-polyfill'
import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import Home from './containers/Home'
import configureStore from './redux/store'

let grid = Array(...Array(50)).map(() => Array(50).fill('#FFFFFF'));
let initialState = {
    pallete: {
        colorChoices: ['#F9EBEA', '#E6B0AA', '#CD6155', '#A93226',
        '#7B241C', '#F5EEF8', '#D7BDE2', '#AF7AC5', '#884EA0', '#633974', '#EAF2F8', '#A9CCE3',
        '#5499C7', '#2471A3', '#1A5276', '#E8F6F3', '#A3E4D7', '#48C9B0', '#16A085', '#138D75', '#0E6655',
        '#FEF9E7', '#F9E79F', '#F4D03F', '#D4AC0D', '#7D6608', '#FBEEE6', '#EDBB99', '#DC7633', 
        '#BA4A00', '#873600', '#FFFFFF', '#F8F9F9', '#E5E7E9', '#99A3A4', '#616A6B', '#424949'
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