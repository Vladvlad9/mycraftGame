import {TextureLoader} from "three";
import {dirtImg, grassImg, glassImg, woodImg, logImg} from './images'

const dirTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)


export {
    dirTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,

}