import Input from '../../component/ui/Input/Input'
import './signUp.css'
import Button from '../../component/ui/Button/Button'
import { useSelector,useDispatch } from 'react-redux'
import { Link, useLocation ,useNavigate} from 'react-router-dom'
import {useForm} from 'react-hook-form'
import { useEffect, useRef, useState } from 'react'
import * as yup from 'yup'
import {yupResolver} from "@hookform/resolvers/yup"
import Modal from '../../component/layout/Modal/Modal'
import { closeModal, openModal } from '../../redux/slide/setting/settingSlide'
import ConfirmEmail from '../../component/layout/ConfirmEmail/ConfirmEmail'
import axios from 'axios'

import { setIsUserConnected } from '../../redux/slide/setting/settingSlide'



function Authentification({type}) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [dataToSend,setDataToSend] = useState({});
    const currentLang = useSelector(state => state.setting.lang.value)
    const ErrorMessage = useSelector(state => state.setting.formErrorMessage)
    const isModalOpen = useSelector(state => state.setting.isModalOpen)
    const [isAbleToTransfertData, setIsAbleToTransfertData] = useState(false)
    const baseUrlApi = useSelector(state => state.setting.baseUrlApi)
    const [confirmCode,setConfirmCode] = useState(null);
    const [hasServerError , setHasServerError] = useState(false)
    const [hasErrorServerSignin,setHasErrorServerSignin] = useState(false)

    const formRef = useRef()
    let schema = yup.object({
        name:yup.string().min(3,ErrorMessage.name[currentLang]),
        email:yup.string().email(ErrorMessage.email[currentLang]).required(),
        password:yup.string().min(5,ErrorMessage.email[currentLang]).required(),
        password_confirm:yup.string().oneOf([yup.ref('password'),null ],ErrorMessage.password_confirm[currentLang]).required(),
        phone:yup.string().min(11).max(12,ErrorMessage.phone[currentLang]),
     

    })

    if(type === 'login'){
        schema = undefined;
         schema = yup.object({
            email:yup.string().email(ErrorMessage.email[currentLang]).required(),
            password:yup.string().min(5,ErrorMessage.email[currentLang]).required(),         
    
        })
    }


    const [hasError, setError]= useState(false);
    let {handleSubmit,register,formState:{errors},clearErrors } = useForm({
        resolver:yupResolver(schema),
    })

    let textButtonFormSignup ={
        fr:"S'inscrire",
        en:"Sign Up",
        ru:"Зарегистрироваться"
    }
    let textButtonFormSignin ={
        fr:"S'identifier",
        en:"Sign in",
        ru:"Войти"
    }

    let nameLabelTextLang ={
        fr:'pseudo',
        en:'name',
        ru:'имя'
    }

    let emailLabelTextLang ={
        fr:'email',
        en:'email',
        ru:'почта'
    }

    let phoneLabelTextLang ={
        fr:'telephone',
        en:'phone',
        ru:'телефон'
    }
    
    let passwordLabelTextLang ={
        fr:'mot de passe',
        en:'password',
        ru:'пароль'
    }


    let passwordConfirmLabelTextLang ={
        fr:'confirmes mot de passe',
        en:'repeat password',
        ru:'повторить пароль'
    }

    const textTitle={
        ru:"Добро пожаловать в  интернет-магазине Luxurious",
        en:'Welcome to the Luxurious store',
        fr:'Bienvenue dans la boutique Luxurious'
    }

    const passwordIcon = (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21.0686 9.25714C21.72 9.84 22.2686 10.4057 22.68 10.8514C22.9643 11.1664 23.1217 11.5757 23.1217 12C23.1217 12.4243 22.9643 12.8336 22.68 13.1486C20.88 15.0857 16.7828 18.8571 12 18.8571H11.3143" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M6.63428 17.3657C4.64851 16.2535 2.85423 14.8297 1.31999 13.1485C1.0357 12.8335 0.878326 12.4243 0.878326 12C0.878326 11.5756 1.0357 11.1664 1.31999 10.8514C3.11999 8.91425 7.21714 5.14282 12 5.14282C13.8853 5.18223 15.7305 5.6951 17.3657 6.63425" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path className='bare' d="M21.4286 2.57141L2.57141 21.4286" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M9.58284 14.4171C8.93898 13.7771 8.57524 12.9078 8.57141 12C8.57141 11.0907 8.93263 10.2186 9.57562 9.57562C10.2186 8.93263 11.0907 8.57141 12 8.57141C12.9078 8.57524 13.7771 8.93898 14.4171 9.58284" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M14.9829 13.7143C14.6777 14.236 14.2401 14.6677 13.7143 14.9657" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
    )
    const textOrientationsignup=[
        {
            fr:'avez vous deja un compte? connectez vous ',
            en:'Do you already have an account? log in ',
            ru:'У вас уже есть аккаунт? войти '
        },
        {
            fr:'ici',
            en:'here',
            ru:'здесь'
        },
    ]
    const textOrientationSignin=[
        {
            fr:"n'avez vous pas encore un compte? Creer un compte ",
            en:"don't you have an account yet? Sign up ",
            ru:'еще нет аккаунта? '
        },
        {
            fr:'ici',
            en:'here',
            ru:'здесь'
        },
    ]

    const serverEmailErrtext={
        en:'email already used',
        fr:'Adresse e-Mail déjà utilisée',
        ru:'электронная почта уже используется'

    }
    const errServerSignin ={
        fr:'email ou mot de passe incorrect',
        en:'Incorrect email or password',
        ru:'Неверный адрес электронной почты или пароль'
    }

     let {pathname,state} = useLocation()
     console.log(state,' mama')

    const sendData = data =>{
    
        if(type !== "login"){

            if(confirmCode=== null){
                setDataToSend(data)
            }else{
                dispatch(openModal())
            }

        }else{
            setDataToSend({email:data.email,password:data.password})
        }
        setIsAbleToTransfertData(true)

       
    }


    useEffect(()=>{
        if(!isAbleToTransfertData ) return
        const params={
            header:{
             'content-type':'application/json',
             lang:currentLang
            },
            body: JSON.stringify(dataToSend)
        }

        if(type !== 'login'){
            axios.post(`${baseUrlApi}/user/confirm-email`,params)
            .then(res=> {

                if(res.data === 'email busy'){
                    setHasServerError(true)
                }
                else if( res.data === 'bad email'){

                    setHasServerError(true)
                }else{
                    if( hasServerError === true)  setHasServerError(false)
                    setConfirmCode(res.data.code)
                    dispatch(openModal())
                }
                

              

                
            })

        }else{
            const params ={
                header:{
                    'content-type':'application/json'
                },
                body:JSON.stringify(dataToSend)

            }

            axios.post(`${baseUrlApi}/user/sign-in`,params)
            .then(res=> {
                if(res.data === 'ok'){
                    if(hasErrorServerSignin){
                        setHasErrorServerSignin(false)
                    }
                    dispatch(setIsUserConnected())
                    
                    if(state!==null){
                        navigate(`../${state}`,{replace:true})
                    }else{
                        navigate('..',{replace:true})
                    }
                }else{
                    
                    setHasErrorServerSignin(true)

                }
            })
        }

        setIsAbleToTransfertData(false)
       
    },[isAbleToTransfertData])

    useEffect(()=>{
        formRef.current.reset()
        setHasServerError(false)
        setHasErrorServerSignin(false)
        let input = document.querySelector('.signUp input')
        input.focus()
        clearErrors()
    },[pathname])



   
   
  return (
    <> 
        <section className='signUp'>
            <div className="signUp__container wrapper">
                <div className="signUp__content">
                    <h2 className="signUp__title">
                        <Link to="/">
                            {textTitle[currentLang]}
                        </Link>
                    </h2>
                    {
                        hasServerError=== true && (
                        <div className="signUp__serverError">
                          {serverEmailErrtext[currentLang]}
                        </div>
                        )
                    }
                    {
                        hasErrorServerSignin=== true && (
                        <div className="signUp__serverError">
                          {errServerSignin[currentLang]}
                        </div>
                        )
                    }
                    
                    <div className="signUp__row">

                        <div className="signUp__img">
                            <img src="/images/product/01.jpg" alt="" />
                        </div>

                        <div className="signUp__body">
                            <form ref={formRef} onSubmit={handleSubmit(sendData)} action="" className="signUp__form form">
                                {
                                    type!=='login' &&(
                                        <div className="form__item">
                                        <Input
                                        type="text"
                                        name="name"
                                        labelText={nameLabelTextLang}
                                        regist={register}
                                        errors={errors}
                                        errorText ={ErrorMessage['name'][currentLang]}
                                        />
                                    </div>
                                    )
                                }
                                <div className="form__item">
                                        <Input
                                            type="email"
                                            name="email"
                                            labelText={emailLabelTextLang}
                                            regist={register}
                                            errors={errors}
                                            errorText ={ErrorMessage['email'][currentLang]}
                                        />
                                    </div>
                                {
                                    type!=='login' &&(
                                        <div className="form__item">
                                            <Input
                                                type="tel"
                                                name="phone"
                                                labelText={phoneLabelTextLang}
                                                regist={register}
                                                errors={errors}
                                                errorText ={ErrorMessage['phone'][currentLang]}
                                            

                                            />
                                        </div>
                                    )
                                }
                                
                            
                                
                                
                                <div className="form__item">
                                    <Input
                                        type="password"
                                        name="password"
                                        labelText={passwordLabelTextLang}
                                        icon={passwordIcon}
                                        regist={register}
                                        errors={errors}
                                        errorText ={ErrorMessage['password'][currentLang]}
                                    
                                    
                                    />
                                </div>
                                {
                                    type !=='login' &&(
                                    <div className="form__item">
                                        <Input
                                            type="password"
                                            name="password_confirm"
                                            labelText={passwordConfirmLabelTextLang}
                                            icon={passwordIcon}
                                            regist={register}
                                            errors={errors}
                                            errorText ={ErrorMessage['password_confirm'][currentLang]}
                                        
                                        
                                        />
                                    </div>
                                    )
                                }
                            
                                <div className="form__item">
                                    <Button
                                        type="plein"
                                        hasIcon={false}
                                        text={type!=="login"?textButtonFormSignup:textButtonFormSignin}
                                        htmlClass="signUp__submit"
                                        genre="submit"
                                        
                                    />
                                </div>
                            </form>
                            <p className='signUp__text'>
                                {
                                type!== "login"? textOrientationsignup[0][currentLang]:textOrientationSignin[0][currentLang] 
                                }
                                <Link to={type!== "login"? "../auth/sign-in":'../auth/sign-up' } className='signUp__link'>{type!== "login"? textOrientationsignup[1][currentLang]:textOrientationSignin[1][currentLang]}</Link>
                            </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
        {
           ( type !=="login" && isModalOpen) && (
            <Modal noClose={true}>
                <ConfirmEmail data={dataToSend} email={dataToSend.email} code={confirmCode}/>
            </Modal>
           )
        }
       
   </>
  )
}

export default Authentification