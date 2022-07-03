import Player from './player.js';

class Computer extends Player {

  /**
   * Ask for a random shape from computer
   *
   * @return string the id for the chosen shape's element
   * @public
   */
  getShapeID() {
    // use this._shapes.length for random length just in case
    // we will add new shapes in the future aka rock scissor paper+
    const randomIndex = Math.floor(Math.random() * this._shapes.length);
    const shape = this._shapes[randomIndex];
    const shapeID = `computer-${shape}`;

    console.log(`Computer choose: ${shape}`);

    return shapeID;
  }

  restart() {
    super.restart("computer");
  }
}

export default Computer
