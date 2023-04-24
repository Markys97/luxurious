import './order.css'
import {useEffect} from 'react'
import Select from '../../component/ui/Select/Select'

function Order() {

    useEffect(()=>{
        window.scrollTo(0,0)
    },[])
  return (
   <div className="order">
    <div className="order__container wrapper">
        <div className="order__content">
            <div className="order__row">
                <div className="order__left">
                    <div className="sneaker-info">
                        <div className="sneaker-info__promo">
                            Member Access
                        </div>
                        <div className="sneaker-info__name">
                            NIKE PEGASUS 40 Premium
                        </div>
                        <div className="sneaker-info__genre">men's Road Running Shows</div>
                    </div>
                    <div className="order__scroll-grid">
                        <div className="order__grid">
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                            <div className="order__sneaker-img ">
                                <img src="/images/product/01.jpg" alt="sneaker" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order__right ">
                    <div className="sneaker-info">
                        <div className="sneaker-info__promo">
                            Member Access
                        </div>
                        <div className="sneaker-info__name">
                            NIKE PEGASUS 40 Premium
                        </div>
                        <div className="sneaker-info__genre">men's Road Running Shows</div>
                        <div className="sneaker-info__price">
                            <div className="sneaker-info__price--old">100 $</div>
                            <div className="sneaker-info__price--new"> 200 $</div>
                        </div>
                    </div>
                    <div className="sneaker-preview">
                        <div className="sneaker-preview__scroll">
                            <div className="sneaker-preview__row">
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                                <div className="sneaker-preview__img">
                                    <img src="/images/product/02.jpg" alt="preview"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sneaker-size">
                        <h3 className="sneaker-size__title">Select Size</h3>
                        <div className="sneaker-size__row">
                            <div className="sneaker-size__item">
                                45
                            </div>
                            <div className="sneaker-size__item">
                                45
                            </div>
                            <div className="sneaker-size__item">
                                45
                            </div>
                            <div className="sneaker-size__item">
                                45
                            </div>
                        </div>
                    </div>

                    <div className="sneaker-buttons">
                        <button className="button button--buy">
                            <div className="button__row">
                                <div className="button__text">Sign In To Buy</div>
                            </div>
                        </button>
                        <button className="button button--like">
                            <div className="button__row">
                                <div className="button__text">Favourite</div>
                                <div className="button__icon">
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
                            </div>
                        </button>
                    </div>

                    <div className="sneaker-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        . Totam sunt necessitatibus quasi dolore accusantium minus
                         quo adipisci fugit, non porro!
                    </div>

                    <Select
                     title="Livraison et retours gratuits"
                    //  contentList={list}
                     />
                  
                </div>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Order