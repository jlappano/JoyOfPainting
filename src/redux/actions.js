let actions = {
  chooseActiveColor: function(color) {
    return {
      type: 'CHOOSE_ACTIVE_COLOR',
      color: color
    }
  },

  updateCanvas: function(chosenColor, firstIndex, secondIndex) {
    return {
      type: 'UPDATE_CANVAS',
      chosenColor: chosenColor,
      firstIndex: firstIndex,
      secondIndex: secondIndex
    }
  }
}

export default actions