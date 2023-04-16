import { useRef,useEffect } from 'react'
import './itemCategorie.css'
import { loadImg,imgLoadingSrc } from '../../../functions/helper';


function ItemCategorie({categorie:{img,name}}) {
  const imgWrapperRef = useRef()
  let srcImgPath = `/images/categorie/${img}`;

  useEffect(()=>{
    loadImg(imgWrapperRef.current,srcImgPath)
  },[])
  return (
    <div  className="item-categorie">
        <div className="item-categorie__content">
            <div ref={imgWrapperRef} className="item-categorie__img ">
                <img  src={imgLoadingSrc} alt={name}  />
            </div>
            <div className="item-categorie__name">{name}</div>
        </div>
    </div>
  )
}

export default ItemCategorie