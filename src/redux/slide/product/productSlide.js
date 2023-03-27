import { createSlice } from "@reduxjs/toolkit";

 const initialState = {
    category:[
        {
            id:0,
            isActive:true,
            isBrand:false,
            lang:{
                en:'All',
                fr:'Tout',
                ru:'Все'
            }
        }, 
        {
            id:1,
            name:'Nike',
            img:'nike.jpg',
            isActive:false,
            isBrand:true,

        }, 
        {
            id:2,
            name:'Puma',
            img:'puma.jpg',
            isActive:false,
            isBrand:true,
        },
        {
            id:3,
            name:'Addidas',
            img:'addidas.jpg',
            isActive:false,
            isBrand:true,
        },
        {
            id:4,
            name:'New Balance',
            img:'new_balance.jpg',
            isActive:false,
            isBrand:true,
        },
    ]
}

 const productSlide = createSlice({
    name:'product',
    initialState,
    reducers:{
        setCategoty: (state,action)=> {
            let newListCategory =[...state.category]
            const finalListCategory= newListCategory.map(item=> {
                 if(item.id === action.payload){
                     item.isActive= !item.isActive
                 }
                 return item
             })

             return state
        }
    }
});

export const {setCategoty} = productSlide.actions




export default productSlide.reducer;