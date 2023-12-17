import GameObject from '../engine/gameobject.js';
import Renderer from '../engine/renderer.js';
import {Images,getTileData} from '../engine/resources.js';
import LevelPlacementData from "./levelplacementdata.js";

class LevelBuild extends GameObject {
    constructor(x, y) {
        super(x, y);
        this.renderer = new Renderer('black', 1280, 768, Images.map);
        this.addComponent(this.renderer);


        const tileData = getTileData();

        const placementTiles = [this.levelplacementdata = new LevelPlacementData(x,y)];

        tileData.forEach((row,y) =>{
            row.forEach((symbol,x) => {
                if(symbol === 14){
                    placementTiles.push(
                        this.levelplacementdata = new LevelPlacementData(x= x*64, y= y*64));
                        this.addComponent(this.levelplacementdata);
                }
            })
        })

        console.log(placementTiles)
    }

}
export default LevelBuild;