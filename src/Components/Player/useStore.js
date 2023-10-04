import create from "zustand";
import {nanoid} from 'nanoid'

export const useStore = create((set) => ({
    texture: "log",
    cubes: [{
        key: nanoid(),
        positionCube: [10, 0, 1],
        texture: 'log'
    }],
    addCube: (x, y, z) => {
        set((prev) => ({
            cubes: [
                ...prev.cubes,
                {
                    key: nanoid(),
                    positionCube: [x, y, z],
                    texture: prev.texture
                }
            ]
        }))
    },
    removeCube: () => {},
    setTexture: () => {},
    resetWorld: () => {}
}))