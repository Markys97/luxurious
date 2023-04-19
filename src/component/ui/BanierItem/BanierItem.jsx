import { useRef,useEffect } from 'react'
import './banierItem.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadImg,imgLoadingSrc } from '../../../functions/helper'

function BanierItem({pub:{id,img_preview}}) {

    const currentLang = useSelector(state => state.setting.lang.value)
    const baseUrlApi = useSelector(state => state.setting.baseUrlApi)
    let srcPath=  `${baseUrlApi}/product/${img_preview}`
    let imgWrapperRef = useRef()
    useEffect(()=>{
        loadImg(imgWrapperRef.current ,srcPath)
    },[])
  return (
    <Link to={`sneaker/${id}`}>
        <div className="item-banier">
            <div ref={imgWrapperRef} className="item-banier__img loading">
                <img src={imgLoadingSrc} alt='nos productions recents' loading="lazy"/>
            </div>
        </div>
    </Link>
  ) 
}

export default BanierItem