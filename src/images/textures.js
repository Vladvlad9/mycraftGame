import {NearestFilter, RepeatWrapping, TextureLoader} from "three";
import {dirtImg, grassImg, glassImg, woodImg, logImg} from './images'

const dirTexture = new TextureLoader().load(dirtImg)
const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)

woodTexture.magFilter = NearestFilter;
dirTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

grassTexture.magFilter = NearestFilter
grassTexture.wrapS = RepeatWrapping
grassTexture.wrapT = RepeatWrapping



export {
    dirTexture,
    grassTexture,
    glassTexture,
    woodTexture,
    logTexture,

}