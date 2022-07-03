import Player from './player.js';

class Human extends Player {

  constructor() {
    super();
    this._getButtons();
  }

  /**
   * @param buttonCallback - The callback that will be called when
   * the user click a button. The callback will get the index of the chosen shape
   * @type {{buttonCallback : function(string)}}
   * @public
   */
  addButtonListeners(buttonCallback) {
    for (let i = 0; i < this.humanButtons.length; i++) {
      const shapes = this._shapes;
      this.humanButtons[i].addEventListener("click", function () {
        const shape = shapes[i];
        const chosenShapeID = `human-${shape}`;

        console.log(`User choose: ${shape}`);

        buttonCallback(chosenShapeID);
      });
    }
  }

  restart() {
    super.restart("human");
  }

  /**
   * A utility function to query all shape buttons
   * @private
   */
  _getButtons() {
    this.humanButtons = document.querySelectorAll(".human-btn");
    console.log(this.humanButtons);
  }
}

export default Human