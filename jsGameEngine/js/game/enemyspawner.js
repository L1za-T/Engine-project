import Enemy2 from "./enemy2.js";
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import {Images} from "../engine/resources.js";
import game from "../engine/game.js";

class EnemySpawner extends GameObject{

    constructor(x,y, numEnemies, game) {
        super(x,y);
        this.numEnemies = numEnemies;
        this.enemyRespawnTime = 0.75;
        this.spawnedEnemyCount = 0;

        this.addComponent(new Renderer('green', 50, 50, Images.enemy));
        this.addComponent(game);

    }

    spawnEnemies() {
        if (this.spawnedEnemyCount < this.numEnemies) {
            this.getComponent(game).addGameObject(new Enemy2());
            this.spawnedEnemyCount++;
        }
    }

    update(deltaTime) {
        this.enemyRespawnTime -= deltaTime;

        if(this.enemyRespawnTime <= 0) {

            this.spawnEnemies();
            this.enemyRespawnTime = 0.75;
        }

    }
    draw(){

    }
}
export default EnemySpawner;