import {useBox} from "@react-three/cannon";
import * as textures from "../../images/textures"

export const Cube = ({position, texture}) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position
    }))
    const currentTexture = textures[texture + 'Texture']
    return(
        <mesh ref={ref}>
            <boxGeometry attach='geometry' args={[1,1]}/>
            <meshStandardMaterial map={currentTexture} attach='material'/>
        </mesh>
    )
}