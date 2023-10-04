import {useEffect, useState} from "react";
import {useStore} from "../Player/useStore";
import {useKeyboard} from "../Player/keyboard";
import {dirtImg, grassImg, glassImg, logImg, woodImg } from '../../images/images'

const images = {
    dirt: dirtImg,
    grass: grassImg,
    glass: glassImg,
    wood: woodImg,
    log: logImg,
}

export const TextureSelector = () => {
    const [visible, setVisible] = useState(false)
    const [activeTexture, setTexture] = useStore((state) => [state.texture, state.setTexture])
    const {
        dirt,
        grass,
        glass,
        wood,
        log,
    } = useKeyboard()



    useEffect(() => {
        const textures = {
            dirt,
            grass,
            glass,
            wood,
            log,
        }

        const getTexture = Object.entries(textures).find(([k, v]) => v)
        if(getTexture){
            setTexture(getTexture[0])
        }
    }, [setTexture, dirt, grass, glass, wood, log])

    useEffect(() => {
        const visibleTimeout = setTimeout(() => {}, 200)
        setVisible(true)

        return () => {
            clearTimeout(visibleTimeout)
        }
    }, [activeTexture]);

    return visible && (
        <div className='absolute centered texture-selector'>
            {Object.entries(images).map(([key, src]) => {
                return(
                    <img key={key}
                         src={src}
                         alt={key}
                         className={`${key === activeTexture ? 'active' : ''}`}
                    />
                )
            })}
        </div>
    )
}