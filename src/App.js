import React, {useState} from 'react';
import './App.css';
import Slider from './components/slider';
import 'semantic-ui-css/semantic.min.css';
import {Container, Checkbox, Form, Radio, Input} from 'semantic-ui-react';

function App () {
  const [options, setOptions] = useState ({
    autoplay: 2000,
    type: 'carousel',
    autoplaySetting: true,
    perView: 3,
  });
  const {autoplay, type, autoplaySetting, perView} = options;

  const handleChange = (e, {value}) =>
    setOptions ({...options, perView: value});

  return (
    <Container>
      <Form className="setting-form">
        <h1 className="form-title">Carousel-setting</h1>
        <div className="autoplay-setting">
          <Checkbox
            label="Autoplay"
            checked={autoplaySetting}
            onChange={() =>
              setOptions ({
                ...options,
                autoplaySetting: !autoplaySetting,
                autoplay: autoplaySetting ? false : 2000,
              })}
          />
          <Input
            placeholder="Search..."
            value={autoplay}
            onChange={e => setOptions ({...options, autoplay: e.target.value})}
            type="number"
            disabled={autoplaySetting ? false : true}
            className="autoplay-input"
          />
        </div>
        <div className="type-radio-inner">
          <Radio
            className="radio-type-glide"
            label="Carousel"
            name="type"
            value="carousel"
            checked={type === 'carousel'}
            onChange={() => setOptions ({...options, type: 'carousel'})}
          />
          <Radio
            className="radio-type-glide"
            label="Slider"
            name="type"
            value="carousel"
            checked={type === 'slider'}
            onChange={() => setOptions ({...options, type: 'slider'})}
          />
        </div>
        <Form.Field>
          <Radio
            className="radio-type-glide"
            label="View-1"
            name="radioGroup"
            value={1}
            checked={perView === 1}
            onChange={handleChange}
          />
        </Form.Field>
        <Form.Field>
          <Radio
            className="radio-type-glide"
            label="View-2"
            name="radioGroup"
            value={2}
            checked={perView === 2}
            onChange={handleChange}
          />
        </Form.Field>
      </Form>
      <Slider options={{autoplay, type, perView}}>
        <img
          className="full-with-img"
          src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/top-20-angularjs-developer-tools.jpg"
          alt=""
        />
        <img
          className="full-with-img"
          src="https://i.morioh.com/200613/cbd162d1.jpg"
          alt=""
        />
        <img
          className="full-with-img"
          src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
          alt=""
        />
      </Slider>
    </Container>
  );
}

export default App;
