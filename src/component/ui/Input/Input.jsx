import './input.css'
import {useState,useRef} from 'react'
import { useSelector } from 'react-redux'



function Input({name,type,labelText,icon,register,errors,errorText}) {
  const [isInputOpen, setInputOpen] = useState(false)
  const [isHiddenPassword,setHiddenPassword]= useState(true)
  const currentLang = useSelector(state => state.setting.lang.value)
  const inputRef = useRef()


    const openInput = () =>{
        setInputOpen(true);
    }

    const closeInput = e =>{
        if(e.currentTarget.value.length>0) return
        setInputOpen(false)

    }

    const toggleTypePassword = (inputElt)=> {

      if(!isInputOpen) return
      setHiddenPassword(prev => !prev);
      
    }

    const preventIconPassword =(e,)=> {
      if(e.currentTarget.value.length === 0){
        toggleTypePassword(e.currentTarget)
      }
    }

   

  return (
      <div className={`input ${icon!==undefined ? 'hasIcon':''} ${isInputOpen? 'active':''}`} >
        <input
        ref={inputRef}
        onChange={(e)=> preventIconPassword(e)}
          onFocus={()=>openInput()}
          onBlur={(e)=> closeInput(e)}
          type={isHiddenPassword?type:'text'} 
          id={name}
          {
            ...register(name,{required:true})
          }
          />
          
          

        <label className='input__label' htmlFor={name}>{labelText && labelText[currentLang]}</label>

        {
          icon && (
            <div onClick={()=>toggleTypePassword(inputRef.current)} className={`input__icon ${isHiddenPassword?'':'show'}`}>
              {icon}
          </div>
          )
        }

       {errors?.name && <div className="input__error">{errorText}</div>}
      </div> 
  )

  // error hasIcon
}

export default Input