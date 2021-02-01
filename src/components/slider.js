import React, {useRef, useEffect} from 'react';
import GlideJs from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import '@glidejs/glide/dist/css/glide.theme.min.css';

export default function Slider (props) {
  const glider = useRef ();
  const slider = useRef ();
  const {options, children} = props;

  useEffect (() => {
    glider.current = new GlideJs (slider.current).mount ();
  }, []);

  useEffect (
    () => {
      glider.current.update(options);
    },
    [options]
  );

  return (
    <div>
      <div className="glide" ref={slider}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {children.map ((img, index) => (
              <li key={index} className="glide__slide">{img}</li>
            ))}
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            prev
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            next
          </button>
        </div>
      </div>
    </div>
  );
}
