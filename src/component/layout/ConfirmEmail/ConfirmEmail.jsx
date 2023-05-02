import { useEffect, useRef, useState } from 'react';
import './ConfirmEmail.css'
import { set } from 'react-hook-form';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import { Navigate, useNavigate } from 'react-router-dom';
import { closeModal } from '../../../redux/slide/setting/settingSlide';

function ConfirmEmail({email,code,data}) {
    const baseUrlApi= useSelector(state => state.setting.baseUrlApi)
    const confirmEmaiRef = useRef(false)
    const [isValideCode, setisValideCode] = useState(null)
    const [codeFromUser , setCodeFromUser] = useState('')
    const valideFormCode = /^[0-9]{4}$/
    const [timeGetNewCode, setTimeGetNewCode]= useState(59)
    const [getNewCodeRef, setGetNewCodeRef] =useState(0)
    const [newCode,setNewCode]= useState(null)
    const [isSucces, setIsSucces] =useState(false)
    const dispatch = useDispatch();

    const navigate = useNavigate()

    const finalCode = getNewCodeRef!==0?newCode:code;

    const checkCode = (codeFromuser,valideCode) =>{


        if(valideFormCode.test(codeFromuser)){
            if(codeFromuser=== valideCode){
                setisValideCode(null)
             setIsSucces(true)
             setTimeout(()=>{
               
                navigate('../auth/sign-in')
                dispatch(closeModal(true))
             },1000)
            }else{
                setisValideCode(false)
            }
        }else{
            setisValideCode(false)
        }
        
    }
    const handlerUserCode = (codeFromuser)=>{
        setCodeFromUser(codeFromuser)
        if(!isValideCode){
            setisValideCode(null)
        }
    }

    const isAbleToDisplayButton = ()=> valideFormCode.test(codeFromUser)? true:false;


    const handleNewCode = (e)=> {
        if(e.currentTarget.classList.contains('noAcitve')) return 
        setGetNewCodeRef(prev => prev+1)
    }
  
    

   useEffect(()=>{
    
    setTimeout(()=>{
        if(timeGetNewCode >0){
            setTimeGetNewCode(prev => prev-1);
        }
    },1000)
   },[timeGetNewCode])

   useEffect(()=>{
    const data = {'email':email}
    const params={
        header:{
            'content-type':'application/json'
        },
        body:JSON.stringify(data)
    }

   
    if(getNewCodeRef>0){
        axios.post(`${baseUrlApi}/user/get-code-confirm`,params)
        .then(res => {
            if(res.status === 200){
              
                setNewCode(res.data.code)
                setTimeGetNewCode(59)
            }
        })
    }

    console.log(getNewCodeRef,' tata')
   },[getNewCodeRef])

   

   
  return (
    <div className="confirm-mail">
        <div className="confirm-mail__container">
            <div className="confirm-mail__content">
                {
                    isSucces=== true && (
                    <div className="confirm-mail__succes">
                        votre compte a ete creer avec succes
                    </div>
                    )
                }
                
                <h2 className="confirm-mail__title">Отправили код на {email!==undefined && email}</h2>

                <div className="confirm-mail__text">
                    Напишите его, чтобы подтвердить,
                    что это вы, а не кто-то другой входит в личный кабинет
                </div>

                <div  className={`confirm-mail__input  ${isValideCode === false ?'error':''}`}>
                    <input onChange={e=> handlerUserCode(e.currentTarget.value)} placeholder='Введите код' type="text"/>
                </div>

                <button className='confirm-mail__button-link'>
                    <span onClick={(e)=> handleNewCode(e)} className={`confirm-mail__button-link-title ${timeGetNewCode!==0?'noAcitve':''}`}>Отправить ещё раз </span>
                    {
                        timeGetNewCode >0 && ( <span className='confirm-mail__button-link-counter'>00:{`${timeGetNewCode<10?'0':''}${timeGetNewCode}`}</span>)
                    }
                
                    </button>
                {
                    isValideCode===false &&(
                        <p className='confirm-mail__error'>
                            Неверный код
                        </p>
                    )
                }
                
            
                {
                    isAbleToDisplayButton()?(
                        <div className="confirm-mail__wrapper-button">
                            <button onClick={(e)=> checkCode(codeFromUser,finalCode)} className="button button--plein confirm-mail__button">Подтвердить</button>
                        </div>
                    ):(
                    <div className="confirm-mail__wrapper-button">
                        <button disabled className="confirm-mail__button confirm-mail__button--disableb ">Подтвердить</button>
                    </div>
                    )
                }
                
            </div>
            
            
        </div>
    </div>
  )
}

export default ConfirmEmail