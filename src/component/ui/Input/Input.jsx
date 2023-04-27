import './input.css'
import {useState,useRef} from 'react'
import { useSelector } from 'react-redux'

function Input({name,type,labelText,icon}) {
  const [isInputOpen, setInputOpen] = useState(false)
  const [isHiddenPassword,setHiddenPassword]= useState(true)
  const currentLang = useSelector(state => state.setting.lang.value)
  const inputRef = useRef()

    const openInput = () =>{
        setInputOpen(true);
    }

    console.log(inputRef,'tatata')

    const closeInput = e =>{
        if(e.currentTarget.value.length>0) return
        setInputOpen(false)

    }

    const toggleTypePassword = (inputElt)=> {

      if(!isInputOpen) return
      setHiddenPassword(prev => !prev);
      if(inputElt.getAttribute('type')==='password'){
        inputElt.setAttribute('type','type')
      }else{
        inputElt.setAttribute('type','password')
      }
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
          type={type} 
          id={name}/>
          

        <label className='input__label' htmlFor={name}>{labelText && labelText[currentLang]}</label>

        {
          icon && (
            <div onClick={()=>toggleTypePassword(inputRef.current)} className={`input__icon ${isHiddenPassword?'':'show'}`}>
              {icon}
          </div>
          )
        }

       {false && <div className="input__error">mot de passe incorrectdfbdfbfbd dbbrg</div>}
      </div> 
  )

  // error hasIcon
}

export default Input