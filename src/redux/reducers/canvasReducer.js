import _ from 'underscore';

let canvasReducer = function(canvas = {}, action) {
    switch (action.type) {
        case 'UPDATE_CANVAS':
            let updatedGrid = _.clone(canvas.cellGrid);
            updatedGrid[action.firstIndex][action.secondIndex] = action.chosenColor;

            return Object.assign({}, canvas, {
                cellGrid: updatedGrid
            })
        default:
            return canvas;
    }
}

export default canvasReducer


