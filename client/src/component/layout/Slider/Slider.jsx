import { useEffect,useRef } from 'react'
import {register} from 'swiper/element/bundle'
import './Slider.css'
import BanierItem from '../../ui/BanierItem/BanierItem';

register();
function Slider({slides,showNavigation,classHtml}) {
    const swiperElRef = useRef(null);

    const buttonData = {
        lang:{
            fr:'ajouter au panier',
            en:'add in basket',
            ru:"добавить в корзину"
        },
        onclick: function(){
            console.log('maman')
        }
    }

    return (
        <div className={"slider"+ " "+ classHtml}>
            <div className="slider__wrapper">
                {
                    showNavigation && (
                        <div className="slider__btns">
                            <button className="slider__btn slider__btn--prev ">
                                <div className="slider__btn-icon">
                                    <img src="/images/icons/Arrow-Left.svg" alt="icon slider"/>
                                </div>
                            </button>
        
                            <button className="slider__btn slider__btn--next ">
                                <div className="slider__btn-icon">
                                    <img src="/images/icons/Arrow-Left.svg" alt="icon slider"/>
                                </div>
                            </button>
                        </div>
                    )
                }

                <div className="slider__content">
                    <swiper-container 
                        ref={swiperElRef}
                        slides-per-view ="1"
                        loop="true"

                        navigation-next-el= ".slider__btn--next"
                        navigation-prev-el= ".slider__btn--prev"

                        pagination-el=".slider__pagination"
                        Pagination-clickable="true"

                        autoplay-delay="5000"
                        autoplay-pause-on-mouse-enter="true"
                        
                    >
                        
                        {
                            slides.map((pub,id)=> (
                                <swiper-slide key={id}>
                                    <BanierItem
                                        pub={pub}

                                     />
                                </swiper-slide>
                            ))
                        }

                    
                    </swiper-container>
                </div>

                <div className="slider__pagination"></div>
            </div>
        </div>
      );
}

export default Slider