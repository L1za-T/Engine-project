import GameObject from '../engine/gameobject.js';
import UI from '../engine/ui.js';

// The PlayerUI class extends GameObject.
class PlayerUI extends GameObject {
  constructor(x, y) {
    super(x, y); // Call the constructor of the GameObject class.

    // Create a new UI component with initial text and add it to this object's components.
    this.uiComponent = new UI('Lives: 3 Score: 0', x, y);
    this.addComponent(this.uiComponent);
  }

  // The update method is called every frame.
  update(deltaTime) {
    // Find the player object in the game's gameObjects array.
  }
}

export default PlayerUI; // Export the PlayerUI class for use in other modules.
