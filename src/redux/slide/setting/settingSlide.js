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

}

const settingSlide = createSlice( {
    name:'setting',
    initialState,
    reducers:{
        setActiveLang: (state,action) => state= action.payload
    }
} )

export const {setActiveLang} = settingSlide.actions
export default settingSlide.reducer