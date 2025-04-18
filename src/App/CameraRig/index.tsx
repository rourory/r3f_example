import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { PropsWithChildren, useRef } from 'react';

const CameraRig: React.FC<PropsWithChildren> = ({ children }) => {
  const group = useRef<any>(null);

  useFrame((state, delta) => {
    easing.dampE(
      group.current.rotation,
      [state.pointer.y / 4, -state.pointer.x / 4, 0],
      0.25,
      delta,
    );
  });

  return <group ref={group}>{children}</group>;
};

export default CameraRig;
