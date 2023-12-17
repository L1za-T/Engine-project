import Renderer from "../engine/renderer.js";
import GameObject from "../engine/gameobject.js";

class LevelPlacementData extends GameObject{
    constructor(x,y) {
        super(x,y);

        this.x = 0;
        this.y = 0;
        this.addComponent (new Renderer('rgba(255, 255, 255, 0.15)', 64, 64, null))

    }
}
export default LevelPlacementData;