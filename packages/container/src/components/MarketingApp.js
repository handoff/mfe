import { mount } from 'marketing/MarketingApp'; // Package declared in webpack.dev.js files
import React, { useEffect, useRef } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
