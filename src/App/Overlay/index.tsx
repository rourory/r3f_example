import React from 'react';
import Intro from '../Intro';
import Customizer from '../Customizer';
import { useSnapshot } from 'valtio';
import { state } from '../../valtio/store';
import { AiOutlineHighlight } from 'react-icons/ai';
import { Logo } from '@pmndrs/branding';

const Overlay = () => {
  const snap = useSnapshot(state);

  return (
    <div className="container">
      <header>
        <Logo width="40" height="40" />
        <AiOutlineHighlight size={'3em'} />
      </header>
      {snap.intro ? <Intro /> : <Customizer />}
    </div>
  );
};

export default Overlay;
