import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state } from '../../valtio/store';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const Shirt: React.FC<any> = (props) => {
  const snap = useSnapshot(state);
  const texture = useTexture(`${state.selectedDecatl}.png`);
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb') as any;

  useFrame((state, delta) => {
    easing.dampC(materials.lambert1.color, snap.selectedColor, 0.5, delta);
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}>
        <Decal scale={0.17} position={[0, 0.06, 0.15]} rotation={[0, 0, 0]} map={texture} />
      </mesh>
    </group>
  );
};

useGLTF.preload('/shirt_baked_collapsed.glb');
['three2', 'react', 'pmndrs'].forEach((decal) => useTexture.preload(`${decal}.png`));

export default Shirt;
