import Intro from '../Intro';
import Customizer from '../Customizer';
import { useSnapshot } from 'valtio';
import { state } from '../../valtio/store';
import { AiOutlineHighlight } from 'react-icons/ai';
import { Logo } from '@pmndrs/branding';
import { motion, AnimatePresence, animate } from 'framer-motion';

const Overlay = () => {
  const snap = useSnapshot(state);

  const transition = { type: 'spring', duration: 1.2 };

  const config = {
    initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
    animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
    exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
  };

  return (
    <div className="container">
      <motion.header
        initial={{ opacity: 0, y: -120 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 1.8, delay: 2 }}>
        <Logo width="40" height="40" />
        <AiOutlineHighlight size={'3em'} />
      </motion.header>
      <AnimatePresence>
        {snap.intro ? (
          <Intro key={'main'} config={config} />
        ) : (
          <Customizer key={'custom'} config={config} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Overlay;
