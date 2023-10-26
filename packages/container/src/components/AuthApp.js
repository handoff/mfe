import { mount } from 'auth/AuthApp'; // Package declared in webpack.dev.js files
import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignin }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathName }) => {
        console.log('🧭 app navigated', nextPathName);
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignin: () => {
        onSignin();
      },
    });

    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref} />;
};
