import shortid from 'shortid';

const initialState = [
  {
    id: shortid (),
    title: 'APPLE IPHONE X 64GB',
    type: 'device',
    price: 800,
    quantity: '10',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/iphonex/01-1000x1340.jpg',
  },
  {
    id: shortid (),
    title: 'IPhone X',
    type: 'device',
    price: 600,
    quantity: '10',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/iphonex/03-1000x1340.jpg',
  },
  {
    id: shortid (),
    title: 'SAMSUNG GALAXY S8 G950F',
    type: 'Device',
    price: 400,
    quantity: '5',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/samsung8/01-246x359.jpg',
  },
];


const productsReducer =  (state = initialState) => {
  return state;
};

export default productsReducer
