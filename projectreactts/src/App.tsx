import React, {useState, createElement as e, useEffect} from 'react';
import {Product} from './components/Product'
import {products} from './data/products'
import axios from 'axios';
import { IProduct } from './models';


function App() {

  async function fetchProducts(){
    const response = 
    await axios.get<IProduct[]>
    ('https://fakestoreapi.com/products?limit=7')
    console.log(response)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className ="container mx-auto max-w-2xl pt-5">

      { products.map(product => <Product product={product} key={product.id} />)}
    </div>
  )
}

export default App;
