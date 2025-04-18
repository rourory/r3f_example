import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.scss';
import Overlay from './App/Overlay';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <>
    <App />
    <Overlay />
  </>,
);
