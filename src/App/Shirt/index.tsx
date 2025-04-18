import { Decal, useGLTF, useTexture } from '@react-three/drei';
import { useSnapshot } from 'valtio';
import { state } from '../../valtio/store';
import { Color } from 'three';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const Shirt: React.FC<any> = (props) => {
  const texture = useTexture('three2.png')
  const snap = useSnapshot(state);
  const { nodes, materials } = useGLTF('/shirt_baked_collapsed.glb') as any;

useFrame((state, delta) => {
  easing.dampC(
    materials.lambert1.color, snap.selectedColor, 0.5, delta
  )
})

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        //@ts-ignore
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        material-roughness={1}
        dispose={null}
      >
        <Decal map={texture}/>
      </mesh>
    </group>
  );
};

useGLTF.preload('/shirt_baked_collapsed.glb');

export default Shirt;
