import { useRef } from 'react'
import './menuMobile.css'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { setIsOpenMenuMobile } from '../../../redux/slide/setting/settingSlide'

function MenuMobile() {
    const links = useSelector(state=> state.setting.menuLinks)
    const isMenuMobileOpen = useSelector(state=> state.setting.isMenuMobileOpen)
    const dispatch = useDispatch();
    const linkSubMenuRef = useRef()
    const closeMenuMobile = ()=> {
        dispatch(setIsOpenMenuMobile(false))
        document.body.classList.remove('pause')
    }
    const currentLang = useSelector(state=> state.setting.lang.value)

   
  return (
    <nav className='menuMobile'>
        <div className="menuMobile__container">
            <div className="menuMobile__content">
                <button onClick={closeMenuMobile} className="menuMobile__close-btn">
                    <div className="menuMobile__close-btn-line"></div>
                </button>

                <ul className="menuMobile__list">

                    {
                        links.map((link,id)=>(
                            <li key={id} className={`menuMobile__item ${(link?.subMenu !== undefined)?'open':null}`}>
                                <Link  to={link.href} className="menuMobile__link">
                                    <div className="menuMobile__link-text">
                                        {link.lang[currentLang]}
                                    </div>
                                    {link?.subMenu !==undefined?  (
                                        <div className="menuMobile__link-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.857147 6.60001L11.4 17.1429C11.477 17.2249 11.5699 17.2902 11.6731 17.3349C11.7763 17.3796 11.8876 17.4026 12 17.4026C12.1125 17.4026 12.2237 17.3796 12.3269 17.3349C12.4301 17.2902 12.523 17.2249 12.6 17.1429L23.1429 6.60001" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    ):null}
                                </Link>
                                {link?.subMenu !== undefined && (
                                    <ul className="menuMobile__submenu">
                                        {
                                            link.subMenu.map((submenu_link,id)=>(
                                                <li className="menuMobile__submenu-item">
                                                    <Link to={submenu_link.href} className="menuMobile__submenu-link">
                                                        {
                                                            submenu_link.lang[currentLang]
                                                        }
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                  )}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default MenuMobile