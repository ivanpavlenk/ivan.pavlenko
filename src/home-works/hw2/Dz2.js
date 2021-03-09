import React, { Component } from 'react';
import './Dz2.css'
import Glide from "./Glide";
import { Checkbox, Container, Radio, Form, Input, Button } from "semantic-ui-react";

class Dz2 extends Component {

  state = {
    autoplay: false,
    type: 'carousel',
    perView: 3,
    visible: true
  };

  render() {
    const { autoplay, type, perView } = this.state;
    return (
      <Container className='dz2'>
        <Form>
          <Form.Field>
            <Input value={perView} type='numeric' onChange={(e) => this.setState({ perView: e.target.value })} />
          </Form.Field>
          <Form.Field>
            <Checkbox label='Autoplay' checked={autoplay} onChange={() => this.setState({ autoplay: !autoplay })} />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Carousel'
              name='type'
              value='carousel'
              checked={type === 'carousel'}
              onChange={() => this.setState({ type: 'carousel' })}
            />
          </Form.Field>
          <Form.Field>
            <Radio
              label='Slider'
              name='type'
              value='slider'
              checked={type === 'slider'}
              onChange={() => this.setState({ type: 'slider' })}
            />
          </Form.Field>
        </Form>
        <Button onClick={() => this.setState({ visible: false })}>Remove Slider</Button>
        {
          this.state.visible &&
          <Glide options={{autoplay: autoplay ? 2000 : false, type, perView}}>
            <img className="full-with-img"
                 src="https://www.valuecoders.com/blog/wp-content/uploads/2016/08/top-20-angularjs-developer-tools.jpg"
                 alt=""/>
            <img className="full-with-img" src="https://i.morioh.com/200613/cbd162d1.jpg" alt=""/>
            <img className="full-with-img"
                 src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1"
                 alt=""/>
          </Glide>
        }
      </Container>
    );
  }
}

export default Dz2;
