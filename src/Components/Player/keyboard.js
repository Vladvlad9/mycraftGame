import {useCallback, useEffect, useState} from "react";


function actionByKey(key){
    const keyAction = {
        KeyW: 'moveForward',
        KeyS: 'moveBackward',
        KeyA: 'moveLeft',
        KeyD: 'moveRight',
        Space: 'jump',

        Digit1: 'dirt',
        Digit2: 'grass',
        Digit3: 'glass',
        Digit4: 'wood',
        Digit5: 'log',
    }
    return keyAction[key]
}

export const useKeyboard = () => {
    const [movement, setMovement] = useState({
        moveForward: false,
        moveBackward: false,
        moveLeft: false,
        moveRight: false,
        jump: false,

        dirt: false,
        grass: false,
        glass: false,
        wood: false,
        log: false,
    })

    const handleKeyDown = useCallback((e) => {
        console.log(e)
        const action = actionByKey(e.code)
        if(action){
            setMovement((prev) => {
                return(
                    {
                        ...prev,
                        [action]: true
                    }
                )
            })
        }
    }, [])

    const handleKeyUp = useCallback((e) => {
        const action = actionByKey(e.code)
        if(action){
            setMovement((prev) => {
                return(
                    {
                        ...prev,
                        [action]: false
                    }
                )
            })
        }
    },[])

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        document.addEventListener('keyup', handleKeyUp)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
            document.removeEventListener('keyup', handleKeyUp)
        }
    }, [handleKeyDown, handleKeyUp])

    return movement
}