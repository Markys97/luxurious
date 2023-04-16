import { createSlice } from "@reduxjs/toolkit";
const listProduct=[
   {
    id:1,
    name:'brexe',
    categorry:'nike',
    state:{
        new:false,
        solde:{
            active:true,
            percent:10,
            dateLimit:'25/12/2143'
        },
        news:'nouveaute'
    },
    colors:[
        {
            value:'black',
            imgs:['01.jpg','14.jpg','03.jpg'],
            quantity:10
        },
        {
            value:'red',
            imgs:['04.jpg','05.jpg','06.jpg'],
            quantity:2
        },
    ],
    price:1500,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a!',
    genre:'m',
    imgs:{
        preview:'04.jpg',
        all:['04.jpg','05.jpg','06.jpg']
    },
    date_enter_product:'10/20/2010'
   },
   {
    id:2,
    name:'marcus',
    categorry:'puma',
    state:{
        new:false,
        solde:{
            active:false,
            percent:10,
            dateLimit:'25/12/2143'
        },
        news:'lorem ipsum'
    },
    colors:[
        // {
        //     value:'black',
        //     imgs:['11.jpg','12.jpg','14.jpg','13.jpg'],
        //     quantity:10
        // },
        {
            value:'black',
            imgs:['11.jpg','12.jpg','14.jpg','13.jpg'],
            quantity:10
        },
       
       
    ],
    price:2000,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a!',
    genre:'f',
    imgs:{
        preview:'10.jpg',
        all:['08.jpg','05.jpg','14.jpg','04.jpg']
    },
    date_enter_product:'10/20/2010'
   },
   {
    id:3,
    name:'le primus',
    categorry:'new balance',
    state:{
        new:false,
        solde:{
            active:false,
            percent:10,
            dateLimit:'25/12/2143'
        },
        news:'lorem ipsum'
    },
    colors:[
        {
            value:'black',
            imgs:['08.jpg','05.jpg','14.jpg','14.jpg'],
            quantity:10
        },
        {
            value:'red',
            imgs:['04.jpg','05.jpg','06.jpg'],
            quantity:2
        },
        {
            value:'red',
            imgs:['04.jpg','05.jpg','06.jpg'],
            quantity:2
        },
    ],
    price:2000,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a!',
    genre:'f',
    imgs:{
        preview:'15.jpg',
        all:['08.jpg','05.jpg','14.jpg','14.jpg']
    },
    date_enter_product:'10/20/2010'
   },
   {
    id:4,
    name:'le kinda',
    categorry:'new balance',
    state:{
        new:false,
        solde:{
            active:false,
            percent:10,
            dateLimit:'25/12/2143'
        },
        news:'lorem ipsum'
    },
    colors:[
        {
            value:'black',
            imgs:['08.jpg','05.jpg','14.jpg','14.jpg'],
            quantity:10
        },
        {
            value:'red',
            imgs:['04.jpg','05.jpg','06.jpg'],
            quantity:2
        },
        {
            value:'red',
            imgs:['04.jpg','05.jpg','06.jpg'],
            quantity:2
        },
    ],
    price:2000,
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, a!',
    genre:'k',
    imgs:{
        preview:'13.jpg',
        all:['08.jpg','05.jpg','14.jpg','14.jpg']
    },
    date_enter_product:'10/20/2010'
   },
]

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
    ],

    listProduct,

    trieHandler:{
        itemTrieListLang: [
            {
                id:1,
                en:'price',
                ru:'цене',
                fr:'prix'
            },
            {
                id:2,
                en:'Men',
                fr:'Homme',
                ru:'Муской',
            },
            {
                id:3,
                en:'Women',
                fr:'Femme',
                ru:'Женский',
            },
            {
                id:4,
                en:'Kids',
                fr:'Enfant',
                ru:'Детский',
            },
        ],
        activeItemTrie:1
    },

    listProductToShow :[...listProduct]
}

 const productSlide = createSlice({
    name:'product',
    initialState,
    reducers:{
        setCategoty: (state,action)=> {
            
            if(action.payload === 0){
             
                state.category.forEach((item,index,arr) => {
                    if(item.id === action.payload){
                        item.isActive= !item.isActive
                        if(item.isActive === true){
                            arr.forEach(el=> {
                                if(el.id !==action.payload){
                                    el.isActive=false
                                }
                            } );
                        }
                        
                    }
                   
                });
               
            }else{
                state.category.map((item,index,arr)=>{

                    if(item.id ===0){
                        item.isActive= false
                    }

                    if(item.id === action.payload){
                        item.isActive = !item.isActive
                    }
                })
            }

            let activeItem = state.category.filter(item=> item.isActive === true).length;
            if(activeItem ===0){
                state.category.forEach(item => {
                    if(item.id === 0){
                        item.isActive = true
                    }
                })
            }


           

            return state
        },
        setActiveItemTrie:(state,action)=>{
            state.trieHandler.activeItemTrie =action.payload
            return state
        },
        setProductToShow:(state,action)=>  {
            state.listProductToShow = action.payload
            return state
        }
    }
});

export const {setCategoty,setActiveItemTrie,setProductToShow} = productSlide.actions

 


export default productSlide.reducer;