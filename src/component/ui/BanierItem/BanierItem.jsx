import './banierItem.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function BanierItem({pub:{img,description,canIBuy },buttonData:{lang,onclick}}) {
    const currentLang = useSelector(state => state.setting.lang.value)
  return (
    <div className={`item-banier ${canIBuy?'item-banier--show':null}`}>
        <div className="item-banier__img">
            <img src={`/images/pub/${img}`} alt={description} />
        </div>
        {
            canIBuy && (
                <Link to={'/'} className="item-banier__button-wrapper">
                    <button className="button">{lang[currentLang]}</button>
                </Link>
            )
        }
       
    </div>
  ) 
}

export default BanierItem