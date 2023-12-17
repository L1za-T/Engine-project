import Enemy2 from "./enemy2.js";
import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import {Images} from "../engine/resources.js";

class EnemySpawner extends GameObject{

    constructor(x,y, numEnemies) {
        super(x,y);
        this.numEnemies = numEnemies;
        this.enemies = [];
        this.enemyRespawnTime = 0.5;
        this.spawnedEnemyCount = 0;
        this.addComponent(new Renderer('green', 50, 50, Images.enemy));

    }


    spawnEnemies() {
        if (this.spawnedEnemyCount < this.numEnemies) {
            this.enemies.push(new Enemy2());
            this.spawnedEnemyCount++;
        }
    }

    update(deltaTime) {
        this.enemyRespawnTime -= deltaTime;

        this.enemies.forEach(() => {this.getComponent(Renderer)});
        if(this.enemyRespawnTime <= 0) {
            this.spawnEnemies();
            this.enemyRespawnTime = 0.5;

            console.log(this.spawnedEnemyCount);
        }

        super.update(deltaTime)
    }
}
export default EnemySpawner;