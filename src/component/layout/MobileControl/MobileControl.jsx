import { useEffect, useRef } from 'react'
import './mobileControl.css'
import SelectLang from '../../ui/SelectLang/SelectLang'
import { Link } from 'react-router-dom'
import ThemeHandler from '../../ui/ThemeHandler/ThemeHandler'
import SearchInput from '../../ui/Input/Input'
import { useSelector } from 'react-redux'


function MobileControl() {
    const currentLang = useSelector(state => state.setting.lang.value)
    const connectionLinks = useSelector(state=> state.setting.sessionUserLink)

    const mobileControlRef = useRef();

    const placeholderSearchInput = {
        lang:{
            en:'search',
            fr:"recherche",
            ru:'поиск'
        }
    }
   
    const toggleVisibilityMobileControl = (elt) => {
        let lastScrollTop = 0;

        window.addEventListener("scroll", function(){
           var st = this.scrollY
           let eltHeight = parseFloat(getComputedStyle(elt).height)
           
           if (st > lastScrollTop) {
              elt.style.bottom =  `-${eltHeight+50}px`
           } else if(st ===0) {
                elt.style.bottom = 0
           }
           else{
            elt.style.bottom = 0
           } 

           lastScrollTop = st <= 0 ? 0 : st; 
         
        }, false);
    }

    useEffect(()=>{
        let mobileControlElt = mobileControlRef.current;

        // toggleVisibilityMobileControl(mobileControlElt)

       

        if( document.querySelector('.footer') !== undefined){
            document.querySelector('.footer').style.marginBottom = `${ parseFloat(getComputedStyle(mobileControlElt).height)+ 20}px`
            console.log(getComputedStyle(mobileControlElt).height)
           

            if( document.querySelector('.footer') !== undefined){
                window.addEventListener('resize',function(e){
                    document.querySelector('.footer').style.marginBottom = `${ parseFloat(getComputedStyle(mobileControlElt).height )+20}px`
        
                    if(this.screen.width>1200){
                        document.querySelector('.footer').style.marginBottom = 0
                    }
                })
            }
        }

    },[])


  return (
    <div ref={mobileControlRef} className='mobileControl'>
        <div className="mobileControl__container wrapper">
            <div className="mobileControl__content">
                <div className="mobileControl__top">
                    <div className="mobileControl__top-row">

                        <div className="mobileControl__setting">
                            <ThemeHandler htmlClass="theme--mobile"/>
                        </div>

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

                        <div className="mobileControl__lang">
                            <SelectLang htmlClass="lang--mobile"/>
                        </div>
                    </div>
                </div>
                <div className="mobileControl__bottom">
                    <form className="header__form form">
                        <SearchInput 
                            placeholder={placeholderSearchInput}
                            htmlClass='form__input--search'
                        />
                    </form>
                    <div className="header__connection">
                        {
                            connectionLinks.map((item,id)=> (
                                <Link key={id} to={item.href}>{item.lang[currentLang]}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MobileControl