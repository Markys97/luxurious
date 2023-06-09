import './button.css'
import { useSelector } from 'react-redux'

function Button({text ,type ,hasIcon,icon,htmlClass,genre,onEvent}) {
    const currentLang = useSelector(state => state.setting.lang.value)
  return (
    <button onClick={(e)=> onEvent!== undefined ? onEvent():''} type={genre? genre:''} className={`button button--${type} ${htmlClass}`}>
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