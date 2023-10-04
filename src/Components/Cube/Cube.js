import {useBox} from "@react-three/cannon";
import * as textures from "../../images/textures"
import {useStore} from "../Player/useStore";

export const Cube = ({position, texture}) => {
    const [ref] = useBox(() => ({
        type: "Static",
        position
    }))
    const [addCube, removeCube] = useStore((state) => [state.addCube, state.removeCube])
    const currentTexture = textures[texture + 'Texture']
    return(
        <mesh
            onClick={(e)=>{
                e.stopPropagation()
                const clickFace = Math.floor(e.faceIndex / 2)
                console.log(`Сторона куба ${clickFace}`)
                const {x, y, z} = ref.current.position
                if(e.altKey){
                    removeCube(x, y, z)
                    return
                }
                // eslint-disable-next-line default-case
                switch (clickFace){
                    case 0: addCube(x + 1, y, z); break;
                    case 1: addCube(x - 1, y, z); break;
                    case 2: addCube(x, y + 1, z); break;
                    case 3: addCube(x, y - 1, z); break;
                    case 4: addCube(x, y, z + 1); break;
                    case 5: addCube(x, y, z - 1); break;
                }
            }}
            ref={ref}>
            <boxGeometry attach='geometry' args={[1,1]}/>
            <meshStandardMaterial map={currentTexture} attach='material'/>
        </mesh>
    )
}