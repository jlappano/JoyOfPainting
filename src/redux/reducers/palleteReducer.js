//updates pallete with chosen color in action object
let palleteReducer = function(pallete = {}, action) {
    switch (action.type) {
        case 'CHOOSE_ACTIVE_COLOR':
            return Object.assign({}, pallete, {
                activeColor: action.color
            })
        default:
            return pallete
    }
}

export default palleteReducer