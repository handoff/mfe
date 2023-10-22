import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount function (don't export react compont as container app might not use react)
const mount = (el) => {
  ReactDOM.render(<App />, el);
};

// If development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// We are running containerized so export the mount function
export { mount };
