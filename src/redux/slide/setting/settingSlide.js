import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    lang:{
        icon:'usa.png',
        lang:{
            fr:'Anglais',
            ru:'Английский',
            en:'English'
        },
        value:'en'
    },
    isDarkMode:false,
     menuLinks :[
        {
            hrefValue:'/',
            lang:{
                en:'Home',
                fr:'Accueil',
                ru:'Главная',
            }
            // hasSubMenu:false,
        },
        
        {
            hrefValue:'/',
            lang:{
                en:'Category',
                fr:'Categorie',
                ru:'Категория',

            },
            subMenu:[
                {
                    hrefValue:'/',
                    lang:{
                        en:'Nike',
                        fr:'Nike',
                        ru:'Nike',
                    },
                },
                {
                    hrefValue:'/',
                    lang:{
                        en:'Puma',
                        fr:'Puma',
                        ru:'Puma',
                    },
                },
                {
                    hrefValue:'/',
                    lang:{
                        en:'Addidas',
                        fr:'Addidas',
                        ru:'Addidas',
                    },
                },
            ]
        },

        {
            hrefValue:'/',
            lang:{
                en:'Catalog',
                fr:'Catalogue',
                ru:'Каталог',

            },
        
        },

        {
            hrefValue:'/',
            lang:{
                en:'Contact',
                fr:'Contact',
                ru:'Контакт',

            },
        
        },
    ],
    isOpenMenuMobile:false

}

const settingSlide = createSlice( {
    name:'setting',
    initialState,
    reducers:{
        setActiveLang: (state,action) => state= {...state,lang:{...action.payload}},
        setIsDarkMode: (state,action) => state = {...state,isDarkMode:action.payload},
        setIsOpenMenuMobile: (state,action) => state = {...state,isOpenMenuMobile:action.payload}
    }
} )

export const {setActiveLang,setIsDarkMode,setIsOpenMenuMobile} = settingSlide.actions
export default settingSlide.reducer