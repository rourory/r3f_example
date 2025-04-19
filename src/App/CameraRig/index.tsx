import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';
import React, { PropsWithChildren, useRef } from 'react';
import { state as store } from '../../valtio/store';
import { useSnapshot } from 'valtio';

const CameraRig: React.FC<PropsWithChildren> = ({ children }) => {
  const group = useRef<any>(null);
  const snap = useSnapshot(store);

  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [snap.intro ? -state.viewport.width / 2 : -0.7, 0.7, 2.5],
      0.25,
      delta,
    );
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
