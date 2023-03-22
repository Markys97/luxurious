import { useSelector,useDispatch } from 'react-redux'
import { useState } from 'react';
import './themeHandler.css'
import { setIsDarkMode } from '../../../redux/slide/setting/settingSlide';



function ThemeHandler() {
  const isDarkMode = useSelector(state => state.setting.isDarkMode);
  const currentLang = useSelector(state=> state.setting.lang.value)
  const dispatch = useDispatch()
  const toggleTheme = ()=>{
    dispatch(setIsDarkMode(!isDarkMode))
    if(isDarkMode){
      setTextMode(texts[1])
    }else{
      setTextMode(texts[0])
    }
  }
  const texts=[
    {
      lang:{
        fr:'Sombre',
        en:'Dark',
        ru:'Темный'
      }
    },
    {
      lang:{
        fr:'lumière',
        en:'light',
        ru:'свет'
      }
    },
  ]
  const [textMode,setTextMode] = useState(texts[0])
  return (
    <div className={`theme ${isDarkMode===true? 'theme--dark':null}`}>
    <div className="theme__toggle">
        <div onClick={()=> toggleTheme()} className="theme__radio"></div>
    </div>
    <div className="theme__text">{textMode.lang[currentLang]}</div>
</div>
  )
}

export default ThemeHandler