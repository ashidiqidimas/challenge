import Game from './game.js';
import Human from './players/human.js';
import Computer from './players/computer.js';

const human = new Human();
const computer = new Computer();
const game = new Game();

function chooseShapeCallback(userChosenShapeID) {
  // Just in case the user play again without click restart button first
  restartCallback();

  human.updateShape(userChosenShapeID);

  const computerChosenShapeID = computer.getShapeID();
  computer.updateShape(computerChosenShapeID);

  const resultID = game.getResultID(userChosenShapeID, computerChosenShapeID);
  game.updateGame(resultID);
}

human.addButtonListeners(chooseShapeCallback);

function restartCallback() {
  game.restart();
  human.restart();
  computer.restart();
}

const restartBtn = document.getElementById("restart-btn");
restartBtn.addEventListener("click", restartCallback);
