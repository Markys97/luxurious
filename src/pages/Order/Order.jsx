import './order.css'
import {useEffect,useState,useRef} from 'react'
import Select from '../../component/ui/Select/Select'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom' 
import {imgLoadingSrc} from '../../functions/helper'
import {useSelector} from 'react-redux'

function Order() {
    const currentLang = useSelector(state => state.setting.lang.value)
    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    const validatorId = /^[0-9]+$/
    const {id} =useParams()
    const baseUrlApi = useSelector( state => state.setting.baseUrlApi)
    let baseUrlSrcImg =`${baseUrlApi}/product/`;
    let imgRef= useRef();
    
    let {name,genre,price,description,size} = product
    let state;

    if(product.state !== undefined){
        state= JSON.parse(product.state)
    }
    


    if(!validatorId.test(id)) {
        navigate("../error404", { replace: true });
    }


    useEffect(()=>{
        window.scrollTo(0,0)

        axios.get(`http://localhost:3500/product/${id}`)
        .then(res =>{
            if(res.status === 200){
              
                let product = res.data[0]
                let {imgs,preview} = product;
                // product.description = JSON.parse(description)
                let allImgs = [JSON.parse(preview),...JSON.parse(imgs)];
                product.allImg =allImgs
                setProduct(product)
            }
        })

      
    },[])

    let genreText = {
        M:{
            fr:'chaussure pour homme',
            en:"men's shoes",
            ru:"мужская обувь"
        },
        F:{
            fr:'chaussure pour femme',
            en:"Women's shoes",
            ru:"Женская обувь"
        },
        K:{
            fr:'chaussure pour enfant',
            en:"kid's shoes",
            ru:"детская обувь"
        }
    }


    if(imgRef.value !== undefined){
        console.log(imgRef.value,'tata')
    }

    const changeSrc = (e,imgSrc) =>{
        e.target.src= imgSrc;
        e.target.closest('.order__sneaker-img').classList.remove('loading')
    }




  return (

        (product !== undefined)?(
            <div className="order">
            <div className="order__container wrapper">
                <div className="order__content">
                    <div className="order__row">
                        <div className="order__left">
                            <div className="sneaker-info">
                                <div className="sneaker-info__promo">
                                    {(state!== undefined) && state.news[currentLang]}
                                </div>
                                <div className="sneaker-info__name">
                                   {name}
                                </div>
                                <div className="sneaker-info__genre">
                                    {
                                         (genre !== undefined) && (
                                            genreText[genre][currentLang]
                                         )
                                    }
                                </div>
                            </div>
                            <div className="order__scroll-grid">
                                <div className="order__grid">
                                    
                                    {
                                        
                                        (product.allImg !== undefined) && product.allImg.map((productImg,index)=> (
                                            <div key={index} className="order__sneaker-img loading">
                                                {/* <img src={`${baseUrlSrcImg}/${productImg}`} alt="sneaker" /> */}
                                                <img onLoad={(e)=>changeSrc(e,`${baseUrlSrcImg}/${productImg}`)} src={imgLoadingSrc} alt="" ref={imgRef}/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="order__right ">
                            <div className="sneaker-info">
                                <div className="sneaker-info__promo">
                                {(state!== undefined) && state.news[currentLang]}
                                </div>
                                <div className="sneaker-info__name">
                                    {(name !== undefined) && name}
                                </div>
                                <div className="sneaker-info__genre">
                                    {
                                            (genre !== undefined) && (
                                            genreText[genre][currentLang]
                                            )
                                    }
                                </div>
                                <div className="sneaker-info__price">
                                    <div className="sneaker-info__price--new">
                                            {
                                                (state!== undefined) && (
                                                    (state.solde.active)? (
                                                    ( price - price*state.solde.percent/100) +' ₽'
                                                    ):
                                                    (price)
                                                )
                                            }
                                    </div>
                                    {
                                        (state!== undefined && state.solde.active) && (
                                            <div className="sneaker-info__price--old">
                                                {(price!== undefined) && price +'₽'} 
                                            </div>
                                        )
                                    }
                                   
                                    
                                </div>
                            </div>
                            <div className="sneaker-preview">
                                <div className="sneaker-preview__scroll">
                                    <div className="sneaker-preview__row">
                                        <div className="sneaker-preview__img">
                                            <img src="/images/product/02.jpg" alt="preview"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sneaker-size">
                                <h3 className="sneaker-size__title">Select Size</h3>
                                <div className="sneaker-size__row">
                                   
                                    {
                                        (size !== undefined) && (
                                            JSON.parse(size).map((itemSize,index)=>(
                                            <div key={index} className="sneaker-size__item">
                                               {itemSize}
                                            </div>
                                            ))
                                        )
                                    }
                                    
                                </div>
                            </div>
        
                            <div className="sneaker-buttons">
                                <button className="button button--buy">
                                    <div className="button__row">
                                        <div className="button__text">Sign In To Buy</div>
                                    </div>
                                </button>
                                <button className="button button--like">
                                    <div className="button__row">
                                        <div className="button__text">Favourite</div>
                                        <div className="button__icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <g clip-path="url(#clip0_8_13)">
                                                <path d="M12 21.3429L2.53715 12.7714C-2.60571 7.62857 4.95429 -2.24571 12 5.74286C19.0457 -2.24571 26.5714 7.66286 21.4629 12.7714L12 21.3429Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                                </g>
                                                <defs>
                                                <clipPath id="clip0_8_13">
                                                <rect width="24" height="24" fill="white"/>
                                                </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                </button>
                            </div>
        
                            <div className="sneaker-description">
                                {
                                   description&& JSON.parse(description)[currentLang]
                                   
                                }
                            </div>
        
                            <Select
                             title="Livraison et retours gratuits"
                            //  contentList={list}
                             />
                          
                        </div>
                    </div>
                </div>
            </div>
           </div>
        ):(
            <p>loading ...</p>
        )
  )
}

export default Order