import React, { useState, useEffect } from 'react';

const ScrollUpDownListener = ({ onScrollUp, onScrollDown }) => {
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > prevScrollY) {
        // Scrolling down

        onScrollDown();
      } else if (currentScrollY < prevScrollY) {
        // Scrolling up
        onScrollUp();
      }

      setPrevScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [onScrollUp, onScrollDown, prevScrollY]);

  return null;
};

export default ScrollUpDownListener;
