import {useState} from 'react'
import './listProduct.css'
import Product from '../../ui/Product/Product'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ListProduct() {
    const products = useSelector(state=> state.product.listProductToShow)

    // const {activeItemTrie,itemTrieListLang }= useSelector(state=>state.product.trieHandler)
  return (
    <div className="list-product">
      {
        products.map((product,index)=>  (
          <Product
           key={index}
           dataProduct={product}
           />
        ))
      }
     
    </div>
  )
}

export default ListProduct