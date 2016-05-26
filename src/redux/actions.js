let actions = {
  chooseActiveColor: function(color) {
    return {
      type: 'CHOOSE_ACTIVE_COLOR',
      color: color
    }
  },

  updateCanvas: function(grid) {
    return {
      type: 'UPDATE_CANVAS',
      grid: grid
    }
  }
}

export default actions