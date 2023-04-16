import './input.css'
import {useState,useRef} from 'react'
import { useSelector } from 'react-redux'

function Input({placeholder,htmlClass}) {
  const currentLang = useSelector(state => state.setting.lang.value)
  const inputWrapperRef = useRef()

  const handlerSearch = (inputWrapperElt)=>{
    
  }
  return (
    <div ref={inputWrapperRef} className={`form__input ${htmlClass?htmlClass:''}`} >
        <input type="text" placeholder={placeholder.lang[currentLang]+'...'}/>
        <div onClick={()=>handlerSearch(inputWrapperRef.current)} className="form__icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_8_17)">
            <path d="M10.1486 19.44C15.2801 19.44 19.44 15.2801 19.44 10.1486C19.44 5.01706 15.2801 0.857147 10.1486 0.857147C5.01706 0.857147 0.857147 5.01706 0.857147 10.1486C0.857147 15.2801 5.01706 19.44 10.1486 19.44Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M23.1429 23.1429L16.7143 16.7143" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_8_17">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
    </div>
  )
}

export default Input