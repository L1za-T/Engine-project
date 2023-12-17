// Import the LevelCompiler class from './game/levelCompiler.js'.
import LevelCompiler from './game/levelCompiler.js';

// Create a new instance of the LevelCompiler class with 'gameCanvas' as the canvas ID.
const game = new LevelCompiler('gameCanvas');

// Start the game by calling the start method of the LevelCompiler instance.
game.start();