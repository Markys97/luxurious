import './select.css'
import {useState} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { setAgencyDeliverySelected } from '../../../redux/slide/product/productSlide';


function Select({title,contentList}) {
    const [isBodySelectOpen, setBodySelectOpen] = useState(false);
    let currentLang = useSelector(state => state.setting.lang.value);
    const agenceDeliverySelected = useSelector( state => state.product.agencyDeliverySelected)
    const dispatch = useDispatch();

    console.log(agenceDeliverySelected,'tatatta')

    const listAgnecyDelivery =[
        {
            id:1,
            name:'cdek',
            icon:'cdek.png'
        },
        {
            id:2,
            name:'почта росси',
            icon:'cdek.png'
        },
        {
            id:3,
            name:'un autre',
            icon:'cdek.png'
        },
    ]
    
  return (
    <div className= {`select ${isBodySelectOpen? 'active':''}`}>
        <div className="select__content">
            <div onClick={()=> setBodySelectOpen(!isBodySelectOpen)} className="select__head">
                <div className="select__title">
                    {title[currentLang]}
                </div>
                <div className="select__icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.857147 6.60001L11.4 17.1429C11.477 17.2249 11.5699 17.2902 11.6731 17.3349C11.7763 17.3796 11.8876 17.4026 12 17.4026C12.1125 17.4026 12.2237 17.3796 12.3269 17.3349C12.4301 17.2902 12.523 17.2249 12.6 17.1429L23.1429 6.60001" stroke="black" stroke-width="1.71429" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            {
                isBodySelectOpen && (
                <div className="select__body">
                    
                   {
                    listAgnecyDelivery.map((itemDelivery,index)=> (
                        <div onClick={()=>dispatch(setAgencyDeliverySelected(itemDelivery.id))} className= {`sneaker-delivery__item ${(agenceDeliverySelected===itemDelivery.id)?'active':''}`}>
                            <div key={index} className="sneaker-delivery__logo">
                                <img src= {`/images/utils/${itemDelivery.icon}`} alt={`logo ${itemDelivery.name}`}/>
                            </div>
                            <div className="sneaker-delivery__name">
                              {itemDelivery.name}
                            </div>
                            
                        </div>)
                    )
                   }
                </div>
                )
            }
           
        </div>
    </div>
  )
}

export default Select