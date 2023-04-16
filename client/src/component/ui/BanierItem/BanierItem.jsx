import { useRef,useEffect } from 'react'
import './banierItem.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadImg,imgLoadingSrc } from '../../../functions/helper'

function BanierItem({pub:{img,description}}) {

    const currentLang = useSelector(state => state.setting.lang.value)
    let srcPath=  `/images/pub/${img}`
    let imgWrapperRef = useRef()
    useEffect(()=>{
        loadImg(imgWrapperRef.current ,srcPath)
    },[])
  return (
    <Link to="javascript:void(0)">
        <div className="item-banier">
            <div ref={imgWrapperRef} className="item-banier__img">
                <img src={imgLoadingSrc} alt={description} loading="lazy"/>
            </div>
        </div>
    </Link>
  ) 
}

export default BanierItem