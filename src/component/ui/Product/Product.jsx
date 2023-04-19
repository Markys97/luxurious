import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './product.css'

function Product({dataProduct}) {
    const currentLang = useSelector(state => state.setting.lang.value)
    const colorText = useSelector(state => state.setting.colorText)
    const soldeText = useSelector(state => state.setting.soldeText)
    const imgProductRef = useRef()
    const {
        id,
        description,
        name,
        price,
    } = dataProduct

    
    let {solde,news}= JSON.parse(dataProduct.state)
    let colors= JSON.parse(dataProduct.colors)
    let {preview}= JSON.parse(dataProduct.imgs)

    let baseUrlSrcImg =`http://localhost:3500/product/`;

    const getTotalColor = colorsArr => colorsArr.length

    const getReductionPrice = percent => price - ((price*percent)/100);

    const getImgPreviewToShow = colors => {
        let listImg = []
         colors.forEach(colorItem => {
           colorItem.imgs.forEach(img=> {
            listImg.push(img)
           })
         })

         if(listImg.length > 4){
            return listImg.filter((img,index) => index < 4)
         }else{
           return listImg
         }
    }
    const getImgPreview= colors => {
        let listImg = []
         colors.forEach(colorItem => {
           colorItem.imgs.forEach(img=> {
            listImg.push(img)
           })
         })

         return listImg
    }

    const changeMainImgProduct = (e,imgEltWrapper) =>{
      imgEltWrapper.querySelector('img').src = e.currentTarget.src
    }

    const previewImgsToShow = getImgPreviewToShow(colors)
    const previewImgs = getImgPreview(colors)
    const getRestNumberPreviewImgs = (allPreviewImgs, previewImgToShow) => allPreviewImgs.length - previewImgToShow.length
    const restImgPreview =getRestNumberPreviewImgs(previewImgs,previewImgsToShow)

  return (
    <Link to={`sneaker/${id}`}>
        <div className="product">
            <div ref={imgProductRef} className="product__img">
                <img src={`${baseUrlSrcImg+preview}`} alt="product"/>
            </div>
            <div className="product__body">
                <div className="product__news">
                   {news[currentLang]}
                </div>
                {
                    (getTotalColor(colors) !== 0 && getTotalColor(colors)>=1) && (
                        <div className="product__preview">
                          
                            {
                                previewImgsToShow.map((previewImg,index)=> (
                                    <div key={index} className="product__preview-img">
                                        <img
                                            onMouseMove={(e)=> changeMainImgProduct(e,imgProductRef.current)}
                                            src={`${baseUrlSrcImg+previewImg}`}
                                            alt="product"
                                          />
                                    </div>
                                ))
                               
                            }
                            {
                                (restImgPreview !== 0 && (
                                    <div className="product__preview-rest">
                                        +{restImgPreview}
                                    </div> 
                                ))
                            }
                            
                        </div>
                    )
                }
               
                <div className="product__name">
                    {name}
                </div>
                <div className="product__description">
                  {description[currentLang]}
                </div>
                <div className="product__colors">
                    {`${getTotalColor(colors) } ${(getTotalColor(colors)===1)?colorText[currentLang][0]:colorText[currentLang][1]}`} 
                </div>
                <div className="product__news product__news--hover">
                    {news[currentLang]}
                </div>
                <div className="product__price">
                    <div className="product__price-active">
                        {solde.active ?getReductionPrice(solde.percent):price}<span>₽</span>
                    </div>
                    {
                        solde.active && (
                            <div className="product__price-solde">
                                {price}<span>₽</span>
                            </div>
                        )
                    }
                    
                </div>
                    {
                        solde.active && (
                            <div className="product__solde-info">
                                {`${solde.percent}% ${soldeText[currentLang]}`}
                            </div>
                        )
                    }
               
            </div>
        </div>
    </Link>


    
  )

}

export default Product