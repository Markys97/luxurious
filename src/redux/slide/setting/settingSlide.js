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
    isDarkMode:false

}

const settingSlide = createSlice( {
    name:'setting',
    initialState,
    reducers:{
        setActiveLang: (state,action) => state= {...state,lang:{...action.payload}},
        setIsDarkMode: (state,action) => state = {...state,isDarkMode:action.payload}
    }
} )

export const {setActiveLang,setIsDarkMode} = settingSlide.actions
export default settingSlide.reducer