import './order.css'
import {useEffect,useState,useRef} from 'react'
import Select from '../../component/ui/Select/Select'
import axios from 'axios'
import {useParams,useNavigate} from 'react-router-dom' 
import {imgLoadingSrc} from '../../functions/helper'
import {useSelector} from 'react-redux'

function Order() {
    
    const [imgSelected,setImgSelect] = useState(null)
    const currentLang = useSelector(state => state.setting.lang.value)
    const [product,setProduct] = useState({})
    const navigate = useNavigate()
    const validatorId = /^[0-9]+$/
    const {id} =useParams()
    const baseUrlApi = useSelector( state => state.setting.baseUrlApi)
    let baseUrlSrcImg =`${baseUrlApi}/product/`;
    let imgRef= useRef();
    let {name,genre,price,description,size,colors} = product
    let state;

    if(product.state !== undefined){
        state= JSON.parse(product.state)
    }

    if(colors!==undefined){
        console.log(JSON.parse(colors)[0].imgs[0],'color')
    }

    const choiceOneProduct = (e,id) => {
        setImgSelect(id)
        if(e.currentTarget.classList.contains('active')){
            setImgSelect(null)
        }else{
            setImgSelect(id)
        }
    }

    const getListImgColors =(imgSelected,colors)=>{
        if(colors === undefined) return
        let newColors =JSON.parse(colors);
        let allListColorsImg = newColors.map(item => item.imgs);
        // let listImg = [];
        // allListColorsImg.forEach(imgList => {
        //     imgList.forEach(img=> listImg.push(img))
        // });

        if(imgSelected!== null){
            return[...allListColorsImg[imgSelected]]
        }

        
    }

    const listcolorImg=getListImgColors(imgSelected,colors)

    const showImgProductSelected = (imgSelected,defaultImg,allImgSelected)=>{
        if(imgSelected === null) return defaultImg
        
        return allImgSelected
    }

    const displaySize =(imgSelected,defaultSize,color)=>{

        if(defaultSize !== undefined){
            if(imgSelected === null) return JSON.parse(defaultSize)
            let colorParsed = JSON.parse(color);
    
            if(imgSelected !== null){
                return colorParsed[imgSelected].size
            }
        }
    }

    const finalSizeproduct = displaySize(imgSelected,size,colors)

    const imgToShowInGrid = showImgProductSelected(imgSelected,product.allImg,listcolorImg)

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
                                        
                                        (imgToShowInGrid !== undefined) && imgToShowInGrid.map((productImg,index)=> (
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
                            {
                                (colors !== undefined) && (
                                    <div className="sneaker-preview">
                                        <div className="sneaker-preview__scroll">
                                            <div className="sneaker-preview__row">
                                            
                                                {
                                                    ( JSON.parse(colors)!==undefined) && (
                                                        JSON.parse(colors).map((itemColor,index)=>(
                                                        <div onClick={(e)=> choiceOneProduct(e,index)}  key={index} className= { `sneaker-preview__img ${imgSelected===index?'active':''}`}>
                                                            <img src={`${baseUrlSrcImg}/${itemColor.imgs[0]}`} alt="preview"/>
                                                        </div>
                                                        ))
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                           
                            <div className="sneaker-size">
                                <h3 className="sneaker-size__title">Select Size</h3>
                                <div className="sneaker-size__row">
                                   
                                    {
                                        (finalSizeproduct !== undefined) && (
                                            finalSizeproduct.map((itemSize,index)=>(
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