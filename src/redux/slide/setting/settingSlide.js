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
            hrefValue:'/brands',
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
            hrefValue:'catalog',
            lang:{
                en:'Catalog',
                fr:'Catalogue',
                ru:'Каталог',

            },
        
        },

        {
            hrefValue:'/contact',
            lang:{
                en:'Contact',
                fr:'Contact',
                ru:'Контакт',

            },
        
        },
    ],
    sessionUserLink: [
        {
            href:'/',
            lang:{
                en:'Sign in',
                ru:'Войти',
                fr:"S'identifier"

            }
        },
        {
            href:'/',
            lang:{
                en:'Sign up',
                ru:'Зарегистрироваться',
                fr:"S'inscrire"

            }
        },
    ],
    isOpenMenuMobile:false,
    trieTextLang:{
        title:{
            en:'Sort by',
            ru:'Сортировка по',
            fr:'Trier par'
        }
    },
    colorText:{
        fr:['couleur','couleurs'],
        en:['color','colors'],
        ru:['цвет','цветы']
    }
}

const settingSlide = createSlice( {
    name:'setting',
    initialState,
    reducers:{
        setActiveLang: (state,action) => state= {...state,lang:{...action.payload}},
        setIsDarkMode: (state,action) => state = {...state,isDarkMode:action.payload},
        setIsOpenMenuMobile: (state,action) => state = {...state,isOpenMenuMobile:action.payload}
    }
})

export const {setActiveLang,setIsDarkMode,setIsOpenMenuMobile} = settingSlide.actions
export default settingSlide.reducer