import React, { useState, useEffect } from 'react'

import './styles.css';

const Carousel = (props) => {
  const {children, show, autoplay} = props
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);
  const [touchPosition, setTouchPosition] = useState(null);

  let interval;

  useEffect(() => {
    setLength(children.length)
  }, [children]);

  const next = () => {
    if (currentIndex < (length - show)) {
      setCurrentIndex(prevState => prevState + 1)
    } else if (!(currentIndex < (length - show)) && autoplay) {
      setCurrentIndex(0);
    }
    clearInterval(interval);
  }

  const prev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1)
    }
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX
    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if(touchDown === null) {
      return
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    // 5, -5 скорость свайпа
    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  }

  if (autoplay) {
    interval = setInterval(() => {
      next();
      clearInterval(interval);
    }, 4000);
  }

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* <button className="left-arrow" onClick={prev} disabled={!(currentIndex > 0)}>
          &lt;
        </button> */}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          >
          <div className={`carousel-content show-${show}`} style={{ transform: `translateX(-${currentIndex * (100 / show)}%)` }}>
            {children}
          </div>
        </div>
        {/* <button className="right-arrow" onClick={next} disabled={!(currentIndex < (length - show))}>
          &gt;
        </button> */}
      </div>
    </div>
  )
}

export default Carousel;