import Input from '../../component/ui/Input/Input'
import './signUp.css'

import Button from '../../component/ui/Button/Button'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'



function SignUp() {
    const {handleSubmit,register,formState:{errors}} = useForm()
    const currentLang = useSelector(state => state.setting.lang.value)
    const ErrorMessage = useSelector(state => state.setting.formErrorMessage)
    let textButtonForm ={
        fr:"S'inscrire",
        en:"Sign Up",
        ru:"Зарегистрироваться"
    }

    let nameLabelTextLang ={
        fr:'pseudo',
        en:'name',
        ru:'имя'
    }

    let emailLabelTextLang ={
        fr:'email',
        en:'mail',
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
    const textOrientation=[
        {
            fr:'avez vous deja un compte? connectez vous',
            en:'Do you already have an account? log in',
            ru:'У вас уже есть аккаунт? войти'
        },
        {
            fr:'ici',
            en:'here',
            ru:'здесь'
        },
    ]


    const sendData = data =>{
        console.log(data ,'tata')
      
    }
   
   
  return (
   <section className='signUp'>
    <div className="signUp__container wrapper">
        <div className="signUp__content">
            <h2 className="signUp__title">{textTitle[currentLang]}</h2>
            <div className="signUp__row">

                <div className="signUp__img">
                    <img src="/images/product/01.jpg" alt="" />
                </div>

                <div className="signUp__body">
                    <form onSubmit={handleSubmit(sendData)} action="" className="signUp__form form">
                        <div className="form__item">
                            <Input
                            type="text"
                            name="name"
                            labelText={nameLabelTextLang}
                            register={register}
                            errors={errors}
                            errorText ={ErrorMessage['name'][currentLang]}
                            />
                        </div>
                        <div className="form__item">
                            <Input
                                type="email"
                                name="email"
                                labelText={emailLabelTextLang}
                                register={register}
                                errors={errors}
                                errorText ={ErrorMessage['email'][currentLang]}

                            />
                        </div>
                        <div className="form__item">
                            <Input
                                type="tel"
                                name="phone"
                                labelText={phoneLabelTextLang}
                                register={register}
                                errors={errors}
                                errorText ={ErrorMessage['phone'][currentLang]}

                            />
                        </div>
                        <div className="form__item">
                            <Input
                                type="password"
                                name="password"
                                labelText={passwordLabelTextLang}
                                icon={passwordIcon}
                                register={register}
                                errors={errors}
                                errorText ={ErrorMessage['password'][currentLang]}
                               
                            />
                        </div>
                        <div className="form__item">
                            <Input
                                type="password"
                                name="password-confirm"
                                labelText={passwordConfirmLabelTextLang}
                                icon={passwordIcon}
                                register={register}
                                errors={errors}
                                errorText ={ErrorMessage['confirm_password'][currentLang]}
                               
                            />
                        </div>
                        <div className="form__item">
                            <Button
                                type="plein"
                                hasIcon={false}
                                text={textButtonForm}
                                htmlClass="signUp__submit"
                                genre="submit"
                                
                            />
                        </div>
                    </form>
                    <p className='signUp__text'>
                        {
                           ` ${textOrientation[0][currentLang]} `
                        }
                        <Link className='signUp__link'>{textOrientation[1][currentLang]}</Link>
                    </p>
                </div>
                
            </div>
        </div>
    </div>
   </section>
  )
}

export default SignUp