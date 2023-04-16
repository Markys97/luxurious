import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './footer.css';
import LogoLight from '../../ui/LogoLight/LogoLight'

import MobileControl from '../MobileControl/MobileControl';

function Footer() {
    const currentLang = useSelector(state=> state.setting.lang.value)
    const blockTitles = [
        {
            fr:'Aide',
            ru:'Помощь',
            en:'Help'
        },
        {
            fr:'Contact',
            ru:'Контакт',
            en:'Contact'
        },
    ]

    const utilLinks= [
        {
            href:'/',
            lang:{
                fr:'Mode de payement',
                en:'Payment method',
                ru:'Способ оплаты'
            }
        },
        {
            href:'/',
            lang:{
                fr:'Livraison',
                en:'Delivery',
                ru:'Доставка'
            }
        },
        {
            href:'/',
            lang:{
                fr:'Remboursement',
                en:'Refund',
                ru:'Возвращать деньги'
            }
        },
        {
            href:'/',
            lang:{
                fr:'Signaler un probleme',
                en:'To report a problem',
                ru:'Чтобы сообщить о проблеме'
            }
        },
    ]
    const phoneText = [
        {
            lang:{
                en:'phone',
                ru:'телефон',
                fr:'telephone'
            },
            number: '+7 (920) 066-48-94'
        }
    ]
    const emailText = [
        {
            lang:{
                en:'email',
                ru:'почта',
                fr:'e-mail'
            },
            email: 'brexejunior@gmail.com'
        }
    ]
  return (
    <>
        <footer className="footer">
            <div className="footer__container wrapper">
                <div className="footer__content">
                    <div className="footer__top">
                        <div className="footer__service">
                            <Link to="tel:+79200664894">
                                <LogoLight/>
                            </Link>

                            <Link>
                                <span className="footer__copyright">&#169; copyright</span>
                            </Link>
                        </div>

                        <div className="footer__help">
                            <div className="footer__title">{blockTitles[0][currentLang]}</div>
                            <ul className="footer__list">
                                {
                                    utilLinks.map((link,id)=>{
                                        return (
                                            <li key={id} className="footer__item">
                                                <Link to={link.href}>
                                                    <span className="footer__link">
                                                        {link.lang[currentLang]}
                                                    </span>
                                                </Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>

                        <div className="footer__contact">
                        <div className="footer__title">{blockTitles[1][currentLang]}</div>
                            <ul className="footer__list">
                                <li className="footer__item">
                                        <div className="phone">
                                            
                                            {
                                                phoneText.map((tel,id)=> (
                                                    <Link to={`tel:${''}`} className="phone__item">
                                                        <span className='phone__title'>{tel.lang[currentLang]}:</span>
                                                        <span className='phone__number'>{tel.number}</span>
                                                    </Link>
                                                ))
                                            }
                                            
                                        </div>
                                </li>
                                <li className="footer__item">
                                    <div className="email">                    
                                        {
                                            emailText.map((item,id)=> (
                                                <Link key={id}  to={`tel:${''}`} className="email__item">
                                                    <span className='email__title'>{item.lang[currentLang]}:</span>
                                                    <span className='email__number'>{item.email}</span>
                                                </Link>
                                            ))
                                        }
                                    </div>
                                </li>
                                <li className="footer__item">
                                    <div className="social-media">
                                        <a href="javascript:void()" className="social-media__item">
                                            <div className="social-media__icon">
                                                <img src="/images/icons/whatsapp.png" alt="logo whatsapp" />
                                            </div>
                                        </a>
                                        
                                        <a href="javascript:void()" className="social-media__item">
                                            <div className="social-media__icon">
                                                <img src="/images/icons/instagram.png" alt="logo instagram" />
                                            </div>
                                        </a>
                                        <a href="javascript:void()" className="social-media__item">
                                            <div className="social-media__icon">
                                                <img src="/images/icons/facebook.png" alt="logo facebook" />
                                            </div>
                                        </a>
                                    </div>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
        <MobileControl/>
        
    </>
  )
}

export default Footer