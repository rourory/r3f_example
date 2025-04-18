import { AiOutlineHighlight } from 'react-icons/ai';
import {state} from '../../valtio/store';

const Intro = () => {
  return (
    <section key="main">
      <div className="section--container">
        <div>
          <h1>LET'S DO IT.</h1>
        </div>
        <div className="support--content">
          <div>
            <p>
              Create your unique and exclusive shirt with our brand-new customization tool.{' '}
              <strong>Unleash your creativity</strong> and define your own style.
            </p>
            <button style={{ background: 'black' }}
            onClick={() => {state.intro = false}}
            >
              CUTOMIZE IT <AiOutlineHighlight size={'1.3em'} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
