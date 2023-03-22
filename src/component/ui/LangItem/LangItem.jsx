import {useRef} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setActiveLang } from '../../../redux/slide/setting/settingSlide'

function LangItem({icon,lang,setIsLangOpen,value}) {
  const currentLang = useSelector(state => state.setting.currentLang)
  const dispatch = useDispatch()
  const itemLangNode= useRef()
  const selectLang = ()=>{
   
    if(itemLangNode.current.closest('.lang__body')){
     dispatch(setActiveLang({icon,lang,value}))
     setIsLangOpen(false)
    }
  }
  return (
    <div onClick={()=> selectLang()} className="lang__item" ref={itemLangNode}>
    <div className="lang__flag">
        <img src={`/images/utils/${icon}`} alt=" usa flag" />
        </div>
        <div className="lang__text">{lang !== undefined ? lang[value]: null}</div>
    </div>
  )
}

export default LangItem