import {Canvas} from "@react-three/fiber";
import {Sky} from "@react-three/drei";
import {Physics} from "@react-three/cannon";
import {Ground} from "./Components/Ground/Ground";
import {Player} from "./Components/Player/Player";
import {MouseCamera} from "./Components/MouseСamera/MouseСamera";

function App() {
  return (
    <>
      <Canvas>
          <Sky sunPosition={[100, 100, 20]}/>
          <ambientLight intensity={0.5} />
          <MouseCamera/>
          <Physics>
              <Player/>
              <Ground/>
          </Physics>
      </Canvas>
        <div className='absolute centered cursor'>+</div>
    </>
  );
}

export default App;
