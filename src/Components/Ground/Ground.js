import {usePlane} from "@react-three/cannon";
import {grassTexture} from "../../images/textures";
import {useStore} from "../Player/useStore";

export const Ground = () => {
    const [ref] = usePlane(() => ({
        rotation: [-Math.PI / 2, 0, 0],
        position: [0, -0.5, 0],
    }))
    const [addCube] = useStore((state) => [state.addCube])
    grassTexture.repeat.set(100, 100)

    return(
        <mesh onClick={(e) => {
            e.stopPropagation()
            const [x, y, z] = Object.values(e.point).map((val=> Math.ceil(val)))
            addCube(x, y, z)
        }}
            ref={ref}>
            <planeGeometry attach='geometry' args={[100,100]}/>
            <meshStandardMaterial attach='material' map={grassTexture}/>
        </mesh>
    )
}