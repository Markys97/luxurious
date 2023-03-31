import {useState} from 'react'
import './listProduct.css'
import Product from '../../ui/Product/Product'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function ListProduct() {
    const products = useSelector(state=> state.product.listProduct)
  return (
    <div className="list-product">
        {
            products.map((product,id)=>(
                <Product
                    key={id}
                    dataProduct={product}
                />
            ))
        }
    </div>
  )
}

export default ListProduct