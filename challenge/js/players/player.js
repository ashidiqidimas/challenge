class Player {

  /**
   * An array that contains all shapes in the game
   *
   * @type {string[]}
   * @private
   */
  _shapes = [
    'rock',
    'scissor',
    'paper'
  ];

  /**
   * Gives "chosen card" effect to the element that was chosen
   *
   * @param shapeID - the id of the element that was chosen
   * @type {shapeID : string}
   * @public
   */
  updateShape(shapeID) {
    const chosenElement = document.getElementById(shapeID);
    chosenElement.classList.add("chosen");
  }

  /**
   * Restart shapes element (remove "chosen card" effect) for the given type
   *
   * @param type
   * @type { type : string }
   */
  restart(type) {
    const computerRock = document.getElementById(`${type}-rock`);
    if (computerRock.classList.contains("chosen")) {
      computerRock.classList.remove("chosen");
    }

    const computerScissor = document.getElementById(`${type}-scissor`);
    if (computerScissor.classList.contains("chosen")) {
      computerScissor.classList.remove("chosen");
    }

    const computerPaper = document.getElementById(`${type}-paper`);
    if (computerPaper.classList.contains("chosen")) {
      computerPaper.classList.remove("chosen");
    }
  }
}

export default Player;
