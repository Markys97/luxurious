import './catalog.css'
import Header from "../../component/layout/Header/Header"
import Footer from "../../component/layout/Footer/Footer"
import Trie from '../../component/ui/Trie/Trie'
import ListProduct from '../../component/layout/ListProduct/ListProduct'
import { useParams,useLocation,useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { getCurrentItemTrie } from '../../component/ui/Trie/Trie' 
import { setCategori } from '../../redux/slide/product/productSlide'

function Catalog() {
  let secureValue = /^[a-zA-Z \s]+$/
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const listCategori = useSelector(state => state.product.listCategori)
  const {activeItemTrie,itemTrieListLang }= useSelector(state=>state.product.trieHandler)
  const [listProduct,setListProduct] =  useState([]) //useSelector(state=> state.product.listProductToShow)
  const {category} = useParams();
  const {pathname} = useLocation()


  useEffect(()=>{
    axios('http://localhost:3500/listProduct')
    .then(res => {
      if(res.status===200){
        setListProduct(res.data)
      }
    })

    axios.get('http://localhost:3500/listCategory')
    .then(res => {
      if(res.status === 200){
        //  setCategotiList(res.data)
        dispatch(setCategori(res.data))
      }
    })

    window.scrollTo(0,0)
  },[])




  const filtreListProduct = param => {
    if(param === undefined || param === null) return listProduct

    if(secureValue.test(param)){
      let getParam = param.toLowerCase();
      return listProduct.filter(product => product.category.toLowerCase() === getParam)
    }else{
      console.log('mama')
    }
  }

   let listProductFiltred = filtreListProduct(category)

   const currentItemTrie = getCurrentItemTrie(activeItemTrie,itemTrieListLang)

   const triListproduct = (activeItemTri,listProduct,price) => {
     let triNotFromDb = price
     let itemTriValue = activeItemTri.value;
     if(itemTriValue.toLowerCase() === triNotFromDb.toLowerCase()){
      return listProduct.sort((a,b) => a.price - b.price)
     }
     else
     {
       return listProduct.filter(product => product.genre.toLowerCase().trim() === itemTriValue.toLowerCase().trim())
     }
   
   }

   const listProductToDisplay = triListproduct(currentItemTrie,listProductFiltred,'price')

   const preventParam = (categoriList,param) =>{
    const listNameCategori = categoriList.map( item => item.name.toLowerCase())

    if (!param) return

    if(!listNameCategori.includes(param.toLowerCase())){
     console.log(listNameCategori, param,listNameCategori.includes(param.toLowerCase()))
     navigate("../error404", { replace: true });
    }
   }
   preventParam(listCategori,category)


  return (
    <div className="catalog-page wrapper">

            <main className="catalog-main">
                <div className="catalog-head">
                    <h2 className="catalog-product__title">Title</h2>
                    <Trie/>
                </div>

                <section className='catalog-product'>
                  <div className="catalog-product__content">
                      {/* <ListProduct products={listProductToDisplay}/> */}
                      {
                        // displayproduct(listProductToDisplay)
                      }
                      
                  </div>
                </section>
            </main>

    </div>
  )

  //   <div className="catalog-product__empty">
//   pas de product disponible pour le moment
// </div>


}

export default Catalog