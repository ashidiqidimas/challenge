class Game {

  /**
   * A map that holds all possible result for the game
   * @type { Object.<string, string> }
   * @private
   */
  _results = {
    'human-rock_computer-rock': 'draw',
    'human-scissor_computer-scissor': 'draw',
    'human-paper_computer-paper': 'draw',
    'human-rock_computer-scissor': 'human-win',
    'human-scissor_computer-paper': 'human-win',
    'human-paper_computer-rock': 'human-win',
    'human-rock_computer-paper': 'computer-win',
    'human-scissor_computer-rock': 'computer-win',
    'human-paper_computer-scissor': 'computer-win',
  };

  /**
   * @param userChosenShapeID
   * @param computerChosenShapeID
   * @return { string } - The HTMl ID for the result card element
   */
  getResultID(userChosenShapeID, computerChosenShapeID) {
    const key = userChosenShapeID + '_' + computerChosenShapeID;
    const resultID = this._results[key];

    this._logFormattedResult(resultID);

    return resultID;
  }

  /**
   * Update the game elements according to the resultID
   * @param resultID
   * @type { resultID : string }
   */
  updateGame(resultID) {
    const vsElement = document.getElementById("vs");
    vsElement.classList.add("hidden");

    const cardElement = document.getElementById("result");
    if (cardElement.classList.contains("hidden"))
      cardElement.classList.remove("hidden");
    console.log(cardElement);

    const resultCardElement = document.getElementById(resultID);
    if (resultCardElement.classList.contains("hidden"))
      resultCardElement.classList.remove("hidden");
    console.log(resultCardElement);
  }

  /**
   * Restart game elements like "vs" text, "draw card",
   * "human win" card, and "computer win" card
   */
  restart() {
    const vsElement = document.getElementById("vs");
    vsElement.classList.remove("hidden");

    const drawElement = document.getElementById("draw");
    if (drawElement.classList.contains("hidden") === false)
      drawElement.classList.add("hidden");

    const humanWinElement = document.getElementById("human-win");
    if (humanWinElement.classList.contains("hidden") === false)
      humanWinElement.classList.add("hidden");

    const computerWinElement = document.getElementById("computer-win");
    if (computerWinElement.classList.contains("hidden") === false)
      computerWinElement.classList.add("hidden");

    const cardElement = document.getElementById("result");
    if (cardElement.classList.contains("hidden") === false)
      cardElement.classList.add("hidden");
  }

  /**
   * Format the result to be capitalized at the first character, replace "-" with " ",
   * and add a suffix string according to the resultID
   * @param resultID
   * @type { resultID : string }
   * @private
   */
  _logFormattedResult(resultID) {
    let formattedResult;

    formattedResult = resultID.charAt(0).toUpperCase() + resultID.slice(1);

    if (resultID.includes("-")) {
      formattedResult = formattedResult.replace("-", " ");
    }

    if (resultID === "human-win") {
      formattedResult = formattedResult.concat(". Congratulation!");
    } else if (resultID === "computer-win") {
      formattedResult = formattedResult.concat(" :(");
    }

    console.log(formattedResult);
  }
}

export default Game;