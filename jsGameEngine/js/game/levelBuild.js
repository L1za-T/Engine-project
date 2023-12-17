import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import { Images } from '../engine/resources.js';

class LevelBuild extends GameObject{
    constructor(x,y) {
        super(x, y);
        this.renderer = new Renderer('black', 1280, 768, Images.map);
        this.addComponent(this.renderer);
    }
}
export default LevelBuild;

/*
[
                        {
                         "x":0,
                         "y":0
                        },
                        {
                         "x":-126,
                         "y":161
                        },
                        {
                         "x":200,
                         "y":160
                        },
                        {
                         "x":225,
                         "y":611
                        },
                        {
                         "x":737,
                         "y":611
                        },
                        {
                         "x":737,
                         "y":352
                        },
                        {
                         "x":543,
                         "y":352
                        },
                        {
                         "x":545,
                         "y":95
                        },
                        {
                         "x":1058,
                         "y":95
                        },
                        {
                         "x":1057,
                         "y":483
                        },
                        {
                         "x":1523,
                         "y":483
                        }]
 */