import { useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './product.css'

function Product({dataProduct}) {
    const imgProductRef = useRef()
    const currentLang = useSelector(state=> state.setting.lang.value)
    const colorLang= useSelector(state=> state.setting.colorText)

    const {name,img,genre,color,price,solde,model,device,} = dataProduct

    const basePathImgProduct= '/images/product/'
    const changeImgProduct= (event,nodeTarget) => {
        nodeTarget.src=event.target.src
    }
    const allShoePictures = [img,...model.preview];

    const getSoldeWithSolde = (percent,price)=> {
        return price - ((price * percent)/100)
    }

    console.log(getSoldeWithSolde(solde.percent,price),'tatata')
  return (
    <div className="product">
        <Link to="/">
            <div className="product__img">
                <img ref={imgProductRef} src= {`${basePathImgProduct}${img}`} alt="product" />
            </div>
        </Link>
 
        <div className="product__body">
            
            <div className="product__preview"> 
                {
                    allShoePictures.map((itemPreview,index)=> (
                        <div onMouseEnter={(e)=> changeImgProduct(e,imgProductRef.current)} key={index} className="product__preview-img">
                            <img src= {`${basePathImgProduct}${itemPreview}`} alt={name} />
                        </div>
                    ))
                }
            </div>

            {solde.active && (
                <div className="product__state">
                  {`${solde.lang[currentLang]} ${solde.percent}%`}
                </div>
            )}

            <Link to="/">
                <div className="product__name">
                    {
                        name
                    } 
                </div>
            </Link>

            <div className="product__genre">
               {
                genre[currentLang]
               }
            </div>

            {
                (color.length !==0 && (
                    <div className="product__number-color">
                        {
                            `${color.length} ${ (color.length>1)?colorLang[currentLang][1]:colorLang[currentLang][0]}`
                        } 
                    </div>
                ))
            }
           
            <div className="product__price">
               <span className='product__price-current'>{(!solde.active)?price: getSoldeWithSolde(solde.percent,price)} {device[currentLang]}</span>
                {solde.active && <span className='product__price-old'>{price} {device[currentLang]}</span> }
                
            </div>
          
        </div>

        <div className="product__wrapper-btn">
            <button className='product__button btn'> ajouter au panier</button>
        </div>
    </div>
  )

}

export default Product