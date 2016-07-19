//update canvas copies all values of grid given by the action object and sets it to a new grid object. 
import _ from 'underscore';

let canvasReducer = function(grid = {}, action) {
    switch (action.type) {
        case 'UPDATE_CANVAS':
            return Object.assign({}, grid, {
                cellGrid: action.grid
            })
        default:
            return grid;
    }
}

export default canvasReducer


