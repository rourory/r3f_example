import { Canvas } from '@react-three/fiber';
import Shirt from './Shirt';
import { Vector3 } from 'three';
import { Center, Environment } from '@react-three/drei';
import Backdrop from './Backdrop';
import CameraRig from './CameraRig';
import { useSnapshot } from 'valtio';
import { state } from '../valtio/store';

interface AppType {
  position?: Vector3;
  fov?: number;
}

const App: React.FC<AppType> = ({ position = new Vector3(-1, 1, 3.5), fov = 25 }) => {
  const snap = useSnapshot(state);

  return (
    <Canvas
      shadows
      gl={{ preserveDrawingBuffer: true }}
      eventSource={document.getElementById('root')!}
      eventPrefix="client"
      camera={{ position, fov }}>
      <ambientLight intensity={0.5} />
      <Environment preset="city" />
      <CameraRig>
        <Center>
          <Backdrop />
          <Shirt />
        </Center>
      </CameraRig>
      {/* <OrbitControls /> */}
    </Canvas>
  );
};

export default App;
