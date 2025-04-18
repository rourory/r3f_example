import React from 'react';
import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai';
import { state } from '../../valtio/store';
import { useSnapshot } from 'valtio';

const Customizer = () => {
  const snap = useSnapshot(state);

  const colors = ['#ccc', '#EFBD4E', '#80C670', '#726DE8', '#EF674E', '#353934'];
  const decals = ['react', 'three2', 'pmndrs'];

  return (
    <section key={'custom'}>
      <div className="customizer">
        <div className="color-options">
          {colors.map((color) => (
            <div
              key={color}
              style={{ backgroundColor: color }}
              className="circle"
              onClick={() => {
                state.selectedColor = color;
              }}></div>
          ))}
        </div>
      </div>

      <div className="decals">
        <div className="decals--container">
          {decals.map((decal) => (
            <div key={decal} className="decal">
              <img src={decal + '_thumb.png'} alt={'brand'} />
            </div>
          ))}
        </div>
      </div>

      <button className="share" style={{ background: snap.selectedColor }}>
        DOWNLOAD
        <AiFillCamera size={'1.3em'} />
      </button>
      <button
        className="exit"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          state.intro = true;
        }}>
        GO BACK
        <AiOutlineArrowLeft size={'1.3em'} />
      </button>
    </section>
  );
};

export default Customizer;
