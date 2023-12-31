import GameObject from "../engine/gameobject.js";
import Renderer from "../engine/renderer.js";
import {Images} from "../engine/resources.js";
import Physics from "../engine/physics.js";
import {LevelData} from "../engine/resources.js";
class Enemy2 extends GameObject{
    constructor(x,y) {
        super(x,y);

        //Defines enemy start coordinates. Yes I know normally those are passed in, but in this case it makes it easier if they aren't
        this.x = LevelData[1].x;
        this.y = LevelData[1].y;

        this.waypointIndex =1;

        this.renderer = new Renderer('green', 50, 50, Images.enemy);
        this.addComponent(this.renderer);

        //Defines end coordinates for the enemy, when it reaches them it is de-spawned and a life is lost.
        this.endCoordX = LevelData[LevelData.length-1].x;
        // this.endCoordY = LevelData[LevelData.length-1].y;

        this.addComponent(new Physics({ x: 50, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }));

    }

    update(deltaTime) {

        const physics = this.getComponent(Physics);

        //enemy pathfinding logic.
        const nextWaypoint = LevelData[this.waypointIndex];
        const yDistance = nextWaypoint.y - this.y;
        const xDistance = nextWaypoint.x - this.x;

        const angle = Math.atan2(yDistance, xDistance);
        this.x += Math.cos(angle);
        this.y += Math.sin(angle);

        if (Math.round(this.x) === Math.round(nextWaypoint.x) && Math.round(this.y) === Math.round(nextWaypoint.y) && this.waypointIndex < LevelData.length-1){
            this.waypointIndex++;
        }

        if(this.x < Math.round(nextWaypoint.x)){
            physics.velocity.x = 50;
        } else {
            physics.velocity.x = -50;
        }

        if(this.y < Math.round(nextWaypoint.y)){
            physics.velocity.y = 50;
        } else {
            physics.velocity.y = -50;
        }

        //deletes enemies if they went past the last waypoint

        if(this.x > this.endCoordX){
            this.game.removeGameObject(this);
        }

        super.update(deltaTime);
    }
}
export default Enemy2;