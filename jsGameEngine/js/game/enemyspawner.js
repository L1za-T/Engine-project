import Enemy2 from "./enemy2.js";
import GameObject from "../engine/gameobject.js";
import game from "../engine/game.js";

class EnemySpawner extends GameObject{

    constructor(x,y, numEnemies, game) {
        super(x,y);
        this.numEnemies = numEnemies;
        this.enemyRespawnTime = 0.75;
        this.spawnedEnemyCount = 0;

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

        console.log(this.numEnemies);

    }

    draw(){
    }
}
export default EnemySpawner;