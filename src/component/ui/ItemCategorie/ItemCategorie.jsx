import { useRef,useEffect } from 'react'
import './itemCategorie.css'
import { loadImg,imgLoadingSrc } from '../../../functions/helper';


function ItemCategorie({categorie:{name,img_preview,id}}) {
  const imgWrapperRef = useRef()
  let srcImgPath = `http://localhost:3500/categorie/${img_preview}`;

  useEffect(()=>{
    loadImg(imgWrapperRef.current,srcImgPath)
  },[])
  return (
    <div  className="item-categorie">
        <div className="item-categorie__content">
            <div ref={imgWrapperRef} className="item-categorie__img loading">
                <img  src={imgLoadingSrc} alt={name}  />
            </div>
            <div className="item-categorie__name">{name}</div>
        </div>
    </div>
  )
}

export default ItemCategorie