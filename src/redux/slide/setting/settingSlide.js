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
                    hrefValue:'brands/nike',
                    lang:{
                        en:'Nike',
                        fr:'Nike',
                        ru:'Nike',
                    },
                },
                {
                    hrefValue:'brands/puma',
                    lang:{
                        en:'Puma',
                        fr:'Puma',
                        ru:'Puma',
                    },
                },
                {
                    hrefValue:'brands/addidas',
                    lang:{
                        en:'Addidas',
                        fr:'Addidas',
                        ru:'Addidas',
                    },
                },
                {
                    hrefValue:'brands/new balance',
                    lang:{
                        en:'New Balance',
                        fr:'New Balance',
                        ru:'New Balance',
                    },
                },
            ]
        },

        // {
        //     hrefValue:'catalog',
        //     lang:{
        //         en:'Catalog',
        //         fr:'Catalogue',
        //         ru:'Каталог',

        //     },
        //     subMenu:[
        //         {
        //             hrefValue:'catalog/men',
        //             lang:{
        //                 en:'Men',
        //                 fr:'Homme',
        //                 ru:'Муской',
        //             },
        //         },
        //         {
        //             hrefValue:'catalog/women',
        //             lang:{
        //                 en:'Women',
        //                 fr:'Femme',
        //                 ru:'Женский',
        //             },
        //         },
        //         {
        //             hrefValue:'catalog/kids',
        //             lang:{
        //                 en:'Kids',
        //                 fr:'Enfant',
        //                 ru:'Детский',
        //             },
        //         },
        //     ]
        
        // },

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
            href:'./auth/sign-up',
            lang:{
                en:'Sign in',
                ru:'Войти',
                fr:"S'identifier"

            }
        },
        {
            href:'./auth/sign-up',
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
    },
    
    moneyDevice:{
        ru:'₽',
        fr:'€',
        en:'$'
    },

    soldeText:{
        fr:'de reduction',
        en:'solde',
        ru:'скидка'
    },

    baseUrlApi:'http://localhost:3500',
    formErrorMessage:{
        name:{
            fr:'le nom doit contenir au moin 3 caractère',
            en:'name must contain at least 3 characters',
            ru: "имя должно содержать не менее 3 символa"
        },
        email:{
            fr:'entrez un email valide',
            ru:'введите действующий адрес электронной почты',
            en:'enter a valid email',
        },
        phone:{
            fr:'entrez un numero de telephone valide',
            ru:'введите действительный номер телефона',
            en:'enter a valid phone number'
        },
        password:{
            fr:'mot de passe doit contenir au moins un caractere special et un numbre',
            en:'password must contain at least one special character and a number',
            ru:'пароль должен содержать хотя бы один специальный символ и цифру'
        },
        confirm_password:{
            fr:'les mots de passes de correspondent pas',
            ru:'Пароли не совпадают',
            en:'the passwords do not match'
        }
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