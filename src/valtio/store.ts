import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  selectedColor: '#353934',
});

export { state };
