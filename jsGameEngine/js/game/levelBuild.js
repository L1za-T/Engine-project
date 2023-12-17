import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import {Images} from '../engine/resources.js';

class LevelBuild extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.renderer = new Renderer('black', 1280, 768, Images.map);
        this.addComponent(this.renderer);
    }

}
export default LevelBuild;