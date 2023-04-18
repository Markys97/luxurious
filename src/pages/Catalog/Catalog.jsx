import './catalog.css'
import Header from "../../component/layout/Header/Header"
import Footer from "../../component/layout/Footer/Footer"
import Filter from '../../component/layout/Filter/Filter'
import Trie from '../../component/ui/Trie/Trie'
import ListProduct from '../../component/layout/ListProduct/ListProduct'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios'

function Catalog() {
  const [listProduct,setListProduct] =  useState([]) //useSelector(state=> state.product.listProductToShow)
  const params = useParams();
  useEffect(()=>{
    axios('http://localhost:3500/listProduct')
    .then(res => {
      if(res.status===200){
        setListProduct(res.data)
      }
    })
  },[])


  return (
    <div className="catalog-page wrapper">

            <main className="catalog-main">
                <div className="catalog-head">
                    <h2 className="catalog-product__title">Title</h2>
                    <Trie/>
                </div>
                <section className='catalog-product'>
                  <div className="catalog-product__content">
                      <ListProduct products={listProduct}/>
                  </div>
                </section>
            </main>

    </div>
  )
}

export default Catalog