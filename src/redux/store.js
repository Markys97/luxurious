import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./slide/setting/settingSlide";

const store =configureStore({
    reducer:{
        setting:settingReducer,
    }
})


export default store