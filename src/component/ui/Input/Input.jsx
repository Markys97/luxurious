import './input.css'
import {useState,useRef,memo} from 'react'
import { useSelector } from 'react-redux'



function Input({name,type,labelText,icon,regist,errors,errorText}) {
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

    const handlerBlur = (e) =>{
      if(e.target.value.length !== 0) return
      closeInput(e)
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
      <div className={`input ${icon!==undefined ? 'hasIcon':''} ${isInputOpen? 'active':''} ${errors!==undefined&& errors.hasOwnProperty(name)===true?' error':''}` } >
        <div className="input__body">
            <input
              ref={inputRef}
              onChange={(e)=> preventIconPassword(e)}

              onFocus={()=>openInput()}

              type={isHiddenPassword?type:'text'}

              id={name}

              {
                ...regist!== undefined? {...regist(name, { required: true })}:'' 
              }
              onBlur={e=> handlerBlur(e)}
              />
            <label className='input__label' htmlFor={name}>{labelText && labelText[currentLang]}</label>

            {
              icon && (
                <div onClick={()=>toggleTypePassword(inputRef.current)} className={`input__icon ${isHiddenPassword?'':'show'}`}>
                  {icon}
              </div>
              )
            }
         </div>

       {errors?.name && <div className="input__error">{errors?.name.message}</div>}
      </div> 
  )

  // error hasIcon
}

export default memo(Input)