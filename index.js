const express = require ('express');
const bodyParser = require ('body-parser');
const app = express ();

let products = [
  {
    id: 1,
    title: 'APPLE IPHONE X 64GB',
    type: 'device',
    price: 800,
    quantity: '10',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/iphonex/01-1000x1340.jpg',
  },
  {
    id: 2,
    title: 'IPhone X',
    type: 'device',
    price: 600,
    quantity: '10',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/iphonex/03-1000x1340.jpg',
  },
  {
    id: 3,
    title: 'SAMSUNG GALAXY S8 G950F',
    type: 'Device',
    price: 400,
    quantity: '5',
    img: 'https://luxmobile.com.ua/image/cache/catalog/foto/samsung8/01-246x359.jpg',
  },
];

app.use (bodyParser.urlencoded ({extended: false}));

app.use (bodyParser.json ());

app.get ('/products', (req, res) => {
  res.send (products);
});

app.post ('/products', (req, res) => {
  const newProduct = req.body;
  const isProductExistName = products.some (
    product => product.title === newProduct.title
  );
  if (isProductExistName) {
    return res
      .status (400)
      .send ({success: false});
  }
  products.push (newProduct);
  res.status (200);
  res.send ({success: true});
});

app.put('/products/:id', (req,res) => {
    const paramsId = +req.params.id
    const variableProduct = products.find(product => product.id === paramsId)
    const indexVariableProduct = products.indexOf(variableProduct)
    const updatedProduct = {...variableProduct,...req.body}
    products[indexVariableProduct] = updatedProduct
    res.send({succes: true})
})

app.delete('/products/:id', (req,res )=> {
  const paramsId = +req.params.id
  products = products.filter(product => product.id!== paramsId)
  res.send({succes: true})
})

app.listen (3000);
