import { useRef, useState } from 'react';
import './ConfirmEmail.css'

function ConfirmEmail({email,code}) {
    const confirmEmaiRef = useRef(false)
    const [isValideCode, setisValideCode] = useState(null)
    const [codeFromUser , setCodeFromUser] = useState('')
    const valideFormCode = /^[0-9]{4}$/

    const checkCode = (codeFromuser,valideCode) =>{


        if(valideFormCode.test(codeFromuser)){
            if(codeFromuser=== valideCode){
                setisValideCode(null)
                alert('bon code')
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

    const isAbleToDisplayButton = ()=> valideFormCode.test(codeFromUser)? true:false

  return (
    <div className="confirm-mail">
        <div className="confirm-mail__container">
        <div className="confirm-mail__content">
            <h2 className="confirm-mail__title">Отправили код на {email!==undefined && email}</h2>

            <div className="confirm-mail__text">
                Напишите его, чтобы подтвердить,
                что это вы, а не кто-то другой входит в личный кабинет
            </div>

            <div  className={`confirm-mail__input  ${isValideCode === false ?'error':''}`}>
                <input onChange={e=> handlerUserCode(e.currentTarget.value)} placeholder='Введите код' type="text"/>
            </div>

            <button className='confirm-mail__button-link'>Отправить ещё раз</button>
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
                        <button onClick={(e)=> checkCode(codeFromUser,code)} className="button button--plein confirm-mail__button">Подтвердить</button>
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