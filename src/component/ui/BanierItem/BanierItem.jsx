import { useRef,useEffect } from 'react'
import './banierItem.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { loadImg,imgLoadingSrc } from '../../../functions/helper'

function BanierItem({pub:{img,description,canIBuy },buttonData:{lang,onclick}}) {
    const currentLang = useSelector(state => state.setting.lang.value)
    let srcPath=  `/images/pub/${img}`
    let imgWrapperRef = useRef()
    useEffect(()=>{
        loadImg(imgWrapperRef.current ,srcPath)
    },[])
  return (
    <div className={`item-banier ${canIBuy?'item-banier--show':null}`}>
        <div ref={imgWrapperRef} className="item-banier__img">
            <img src={imgLoadingSrc} alt={description} loading="lazy"/>
        </div>
        {
            canIBuy && (
                <Link to={'/'} className="item-banier__button-wrapper">
                    <button className="button">{lang[currentLang]}</button>
                </Link>
            )
        }
       
    </div>
  ) 
}

export default BanierItem