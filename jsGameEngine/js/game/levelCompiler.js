// Import necessary classes and resources
import Game from '../engine/game.js';
import LevelBuild from "./levelBuild.js";
import EnemySpawner from "./enemyspawner.js";
import {LevelData} from "../engine/resources.js";

// Define a class LevelCompiler that extends the Game class from the engine
class LevelCompiler extends Game {
  
  // Define the constructor for this class, which takes one argument for the canvas ID
  constructor(canvasId) {
    // Call the constructor of the superclass (Game) with the canvas ID
    super(canvasId);

    // Draw the level background image
    const levelBackground = new LevelBuild(0,0);
    this.addGameObject(levelBackground);

    // Set the game's camera target to the player
    this.camera.target = levelBackground;

    // Create 10 enemies and add them to the game
    this.addGameObject(new EnemySpawner(LevelData[1].x-20,LevelData[1].y, 10, this));
  }

}

// Export the LevelCompiler class as the default export of this module
export default LevelCompiler;

