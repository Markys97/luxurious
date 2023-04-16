import { configureStore } from "@reduxjs/toolkit";
import settingReducer from "./slide/setting/settingSlide";
import productReducer from "./slide/product/productSlide";

const store =configureStore({
    reducer:{
        setting:settingReducer,
        product:productReducer
    }
})


export default store