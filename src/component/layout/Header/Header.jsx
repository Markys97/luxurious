import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './header.css'
import SelectLang from '../../ui/SelectLang/SelectLang'
import ThemeHandler from '../../ui/ThemeHandler/ThemeHandler'
import Input from '../../ui/Input/Input'
import LogoLight from '../../ui/LogoLight/LogoLight'
function Header() {
    const currentLang = useSelector(state => state.setting.lang.value)
    const links = [
        {
            hrefValue:'/',
            lang:{
                en:'Home',
                fr:'Accueil',
                ru:'Главная',
            }
            // hasSubMenu:false,
        },
        
        {
            hrefValue:'/',
            lang:{
                en:'Category',
                fr:'Categorie',
                ru:'Категория',

            },
            subMenu:[
                {
                    hrefValue:'/',
                    lang:{
                        en:'Nike',
                        fr:'Nike',
                        ru:'Nike',
                    },
                },
                {
                    hrefValue:'/',
                    lang:{
                        en:'Puma',
                        fr:'Puma',
                        ru:'Puma',
                    },
                },
                {
                    hrefValue:'/',
                    lang:{
                        en:'Addidas',
                        fr:'Addidas',
                        ru:'Addidas',
                    },
                },
            ]
        },
        {
            hrefValue:'/',
            lang:{
                en:'Catalog',
                fr:'Catalogue',
                ru:'Каталог',

            },
        
        },
        {
            hrefValue:'/',
            lang:{
                en:'Contact',
                fr:'Contact',
                ru:'Контакт',

            },
        
        },
    ]

    const connectionLinks = [
        {
            href:'/',
            lang:{
                en:'Sign in',
                ru:'Войти',
                fr:"S'identifier"

            }
        },
        {
            href:'/',
            lang:{
                en:'Sign up',
                ru:'Зарегистрироваться',
                fr:"S'inscrire"

            }
        },
    ]
    const [menuLinks,setMenuLinks] = useState(links);
    return (
        <header className="header">
            <div className="header__container wrapper">
            <div className="header__content">
                <div className="header__top">
                    <div className="header__left">
                        <Link to="tel:+79200664894">
                            <LogoLight/>
                        </Link>
                    </div>
                    <div className="header__center">
                        
                        <div className="header__product">
                            <form className="header__form form">
                                <Input/>
                            </form>  
                            <div className="header__product-icons">
                                <div className="header__like">
                                    <div className="header__like-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_8_13)">
                                        <path d="M12 21.3429L2.53715 12.7714C-2.60571 7.62857 4.95429 -2.24571 12 5.74286C19.0457 -2.24571 26.5714 7.66286 21.4629 12.7714L12 21.3429Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_8_13">
                                        <rect width="24" height="24" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </div>
                                    <div className="header__like-number">
                                        10
                                    </div>
                                </div>
                                <div className="header__card">
                                    <div className="header__card-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22.08 21.24C22.107 21.4805 22.0828 21.724 22.0089 21.9545C21.935 22.1849 21.8132 22.3972 21.6514 22.5772C21.4892 22.7569 21.2908 22.9002 21.0692 22.9977C20.8476 23.0952 20.6078 23.1447 20.3657 23.1429H3.63429C3.39218 23.1447 3.15244 23.0952 2.93083 22.9977C2.70922 22.9002 2.51078 22.7569 2.34857 22.5772C2.1868 22.3972 2.06497 22.1849 1.9911 21.9545C1.91724 21.724 1.893 21.4805 1.92 21.24L3.42857 7.71429H20.5714L22.08 21.24Z" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M7.71429 7.71429V5.14286C7.71429 4.00622 8.16582 2.91613 8.96955 2.1124C9.77328 1.30868 10.8634 0.857147 12 0.857147C13.1367 0.857147 14.2267 1.30868 15.0305 2.1124C15.8342 2.91613 16.2857 4.00622 16.2857 5.14286V7.71429" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </div>
                                    <div className="header__card-number">
                                        99+
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='test' className="header__right">
                        <div className="header__user-out">
                            <div className="header__connection">
                                {
                                    connectionLinks.map((item,id)=> (
                                        <Link to={item.href}>{item.lang[currentLang]}</Link>
                                    ))
                                }
                            </div>

                            <div className="header__setting">
                                <ThemeHandler/>
                            </div>

                            <div className="header__lang">
                                <SelectLang/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header__bottom">
                    <div className="header__menu">
                        <nav className="menu">
                            <ul className="menu__list">
                                {
                                    menuLinks.map( (item,id) => {
                                        return (
                                        <li key={id} className="menu__item">
                                                <Link to={item.hrefValue} className='menu__link'>
                                                    <div className="menu__link-head">
                                                        <div className="menu__link-text link">{item.lang[currentLang]}</div>
                                                        {item?.subMenu !==undefined?  (
                                                            <div className="menu__link-icon">
                                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M0.857147 6.60001L11.4 17.1429C11.477 17.2249 11.5699 17.2902 11.6731 17.3349C11.7763 17.3796 11.8876 17.4026 12 17.4026C12.1125 17.4026 12.2237 17.3796 12.3269 17.3349C12.4301 17.2902 12.523 17.2249 12.6 17.1429L23.1429 6.60001" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                                                </svg>
                                                            </div>
                                                        ):null}
                                                    </div>
                                                    {item?.subMenu !==undefined?  (
                                                        <div className="menu__submenu">
                                                        <ul className='menu__submenu-list'>
                                                            {
                                                                item.subMenu.map( (elt,id) => {
                                                                    return (
                                                                    <li className="menu__submenu-item">
                                                                        <Link href={elt.href}>
                                                                            {elt.lang[currentLang]}
                                                                        </Link>
                                                                    </li>
                                                                    )
                                                                })
                                                            }
                                                        
                                                            
                                                            
                                                        </ul>
                                                    </div>
                                                        ):null
                                                    }

                                                </Link>
                                        </li>
                                        )
                                    } )
                                }
                            
                            </ul>
                        </nav>
                    </div>
                </div>
            
            </div>
            </div>
        </header>
    )
}

export default Header