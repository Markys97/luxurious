import { useState } from 'react'
import { useSelector } from 'react-redux'

import './selectLang.css'
import LangItem from '../LangItem/LangItem'
function SelectLang({htmlClass}) {
    let langActive = useSelector(state=> state.setting.lang)
    
    const langs = [
        {
            icon:'usa.png',
            lang:{
                fr:'Anglais',
                ru:'Английский',
                en:'English'
            },
            value:'en'
        },

        {
            icon:'france.png',
            lang:{
                fr:'Francais',
                ru:'Французский',
                en:'French',
            },
            value:'fr'
        },
        {
            icon:'russie.png',
            lang:{
                fr:'Russe',
                ru:'Русский',
                en:'Russian',
            },
            value:'ru'
        },
    ]
    const [langList,setLangList] = useState(langs);
    const [isLangOpen,setIsLangOpen] = useState(false)

    const toggleSelectOpenBody = () => {
        setIsLangOpen(prev => !prev)
    }

    const listLangInBody= langList.filter( itemLang => itemLang.value!=langActive.value)

  return (
    <div className={`lang ${htmlClass?htmlClass:''}`}>
        <div className="lang__container">
            <div onClick={toggleSelectOpenBody} className={`lang__head ${!isLangOpen && 'lang-body-open'}`}>
                <LangItem 
                    icon={langActive.icon}
                    lang={langActive.lang}
                    value={langActive.value}
                    
                 />
                
            </div>
            {
                isLangOpen && (
                <div className="lang__body">
                    {
                        listLangInBody.map((langItem,id)=> {
                            return(
                                <LangItem
                                 key={id} 
                                 icon={langItem.icon}
                                 lang={langItem.lang}
                                 value={langItem.value}
                                 setIsLangOpen={setIsLangOpen}
                                 />
                            )
                        } )
                    }
                </div>
                )
            }
           
        </div>
    </div>
  )
}

export default SelectLang