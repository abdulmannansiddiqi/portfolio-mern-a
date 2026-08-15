import { useState, useEffect } from 'react';

function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setHide(true), 900);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="loader" className={hide ? 'hide' : ''}>
      <span className="loader-name">AMS</span>
      <div className="loader-ring"></div>
    </div>
  );
}

export default Loader;