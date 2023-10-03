import {useFrame, useThree} from "@react-three/fiber";
import {useSphere} from "@react-three/cannon";
import {useEffect, useRef} from "react";
import { Vector3 } from "three";
import {useKeyboard} from "./keyboard";

const Jump = 4
const Speed = 4

export const Player = () => {
    const {moveBack, moveFor, moveRight, moveLeft, jump} = useKeyboard()

    const {camera} = useThree()
    const [ref, api] = useSphere(() => ({
        mass: 1,
        type: 'Dynamic',
        position: [1, 0.5, 0]
    }))

    const getVelocity = useRef([0, 0, 0])
    useEffect(() => {
        api.velocity.subscribe((newVelocity) => getVelocity.current = newVelocity)
    },[api.velocity])

    const getPosition = useRef([0, 0, 0])
    useEffect(() => {
        api.position.subscribe((newPosition) => getPosition.current = newPosition)
    },[api.position])

    useFrame(() => {
        camera.position.copy(new Vector3(getPosition.current[0], getPosition.current[1], getPosition.current[2]))

        const direction = new Vector3()

        const frontVector = new Vector3(0, 0,
            (moveBack ? 1 : 0) - (moveFor ? 1: 0)
        )

        const sideVector = new Vector3((moveLeft ? 1 : 0) - (moveRight ? 1: 0),
            0, 0
        )

        direction.subVectors(frontVector,sideVector).normalize().multiplyScalar(Speed).applyEuler(camera.rotation)

        api.velocity.set(direction.x, getVelocity.current[1], direction.z)

        if(jump && Math.abs(getVelocity.current[1]) < 0.05){
            api.velocity.set(getVelocity.current[0], Jump, getVelocity.current[2])
        }
    })

    return (
        <mesh ref={ref}></mesh>
    )
}