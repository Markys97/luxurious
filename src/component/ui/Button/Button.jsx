import './button.css'
import { useSelector } from 'react-redux'

function Button({text ,type ,hasIcon,icon}) {
    const currentLang = useSelector(state => state.setting.lang.value)
  return (
    <button className={`button button--${type}`}>
        <div className="button__row">
            <div className="button__text">{text[currentLang]}</div>
            {
                hasIcon === true && (
                    <div className="button__icon">
                        {icon}
                    </div>
                )
            }
            
        </div>
    </button>
  )
}

export default Button