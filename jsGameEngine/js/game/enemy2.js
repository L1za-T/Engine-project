import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import {Images} from "../engine/resources.js";
import Physics from "../engine/physics.js";

class Enemy2 extends GameObject{
    constructor(x,y,endX,endY) {
        super(x,y);
        this.renderer = new Renderer('green', 50, 50, Images.enemy);
        this.addComponent(this.renderer);

        //Defines end coordinates for the enemy, when it reaches them it is de-spawned and a life is lost.
        this.endCoordX = endX;
        this.endCoordY = endY;

        this.addComponent(new Physics({ x: 50, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));
    }

    update(deltaTime) {

        const physics = this.getComponent(Physics);
        physics.velocity.x = 50;
        super.update(deltaTime);
    }
}
export default Enemy2;