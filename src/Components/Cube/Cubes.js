import {useStore} from "../Player/useStore";
import {Cube} from "./Cube";

export const Cubes = () => {
    const [cubes] = useStore((state) => [
        state.cubes
    ])
    return cubes.map(({key, positionCube, texture}) => {
        return(
            <Cube key={key} position={positionCube} texture={texture}/>
        )
    })
}