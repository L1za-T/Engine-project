import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import {Images} from "../engine/resources.js";
import Physics from "../engine/physics.js";
import {LevelData} from "../engine/resources.js";

class Enemy2 extends GameObject{
    constructor() {
        super();

        //Defines enemy start coordinates. Yes I know normally those are passed in, but in this case it makes it easier if they aren't
        this.x = LevelData[1].x
        this.y = LevelData[1].y

        this.renderer = new Renderer('green', 50, 50, Images.enemy);
        this.addComponent(this.renderer);

        //Defines end coordinates for the enemy, when it reaches them it is de-spawned and a life is lost.
        this.endCoordX = LevelData[LevelData.length-1].x;
        this.endCoordY = LevelData[LevelData.length-1].y;

        console.log(LevelData[1].x)

        this.addComponent(new Physics({ x: 50, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));

        this.movementDistance = 0;
    }

    update(deltaTime) {

        const physics = this.getComponent(Physics);
        physics.velocity.x = 50;
        super.update(deltaTime);
    }
}
export default Enemy2;