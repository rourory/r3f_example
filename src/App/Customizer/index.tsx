import React from 'react';
import { AiFillCamera, AiOutlineArrowLeft } from 'react-icons/ai';
import { state } from '../../valtio/store';
import { useSnapshot } from 'valtio';

const Customizer = () => {
  const snap = useSnapshot(state);

  return (
    <section key={'custom'}>
      <div className="customizer">
        <div className="color-options">
          {state.colors.map((color) => (
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
          {state.decals.map((decal) => (
            <div key={decal} className="decal" onClick={() => (state.selectedDecatl = decal)}>
              <img src={decal + '_thumb.png'} alt={'brand'} />
            </div>
          ))}
        </div>
      </div>

      <button
        className="share"
        style={{ background: snap.selectedColor }}
        onClick={() => {
          const link = document.createElement('a');
          link.setAttribute('download', 'canvas.png');
          link.setAttribute(
            'href',
            document
              .querySelector('canvas')
              ?.toDataURL('image/png')
              ?.replace('image/png', 'image/octet/stream') || '',
          );
          link.click();
        }}>
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
