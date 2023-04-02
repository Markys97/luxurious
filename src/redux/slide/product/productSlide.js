import { createSlice } from "@reduxjs/toolkit";
const listProduct=[
    {
        id:1,
        name:'Product a',
        price:1100,
        img:'A1-main.jpg',
        genre:{
            en:"men's shoe",
            fr:'chaussure homme',
            ru:'мужская обувь'
        },
        preview:['A2.jpg','A3.jpg'],
        solde:{
            active:false,
            percent:10,
            lang:{
                fr:`reduction de`,
                ru:'скидка на',
                en:'discount'
            }
        },
        new:{
            active:false,
            text:'',
            dateExpiration:''
        },
        size:[
            {
                quantity:10,
                value:45
            },
            {
                quantity:10,
                value:35
            },
            {
                quantity:10,
                value:40
            },
            {
                quantity:10,
                value:41
            },
            {
                quantity:10,
                value:42
            },
        ],
        color:[],
        model:{
            preview:['A-model-main.jpg','A-model.jpg'],
        },
        device:{
            en:'$',
            fr:'Є',
            ru:'₽'
        },
        categorie:'nike'
        

    },

    {
        id:2,
        name:'Product b',
        price:1200,
        img:'A1-main.jpg',
        genre:{
            en:"men's shoe",
            fr:'chaussure homme',
            ru:'мужская обувь'
        },
        preview:['A2.jpg','A3.jpg'],
        solde:{
            active:true,
            percent:30,
            lang:{
                fr:`reduction de`,
                ru:'скидка на',
                en:'discount'
            }
        },
        new:{
            active:false,
            text:'',
            dateExpiration:''
        },
        size:[
            {
                quantity:10,
                value:45
            },
            {
                quantity:10,
                value:35
            },
            {
                quantity:10,
                value:40
            },
            {
                quantity:10,
                value:41
            },
            {
                quantity:10,
                value:42
            },
        ],
        color:[],
        model:{
            preview:['A-model-main.jpg','A-model.jpg'],
        },
        device:{
            en:'$',
            fr:'Є',
            ru:'₽'
        },
        categorie:'puma'
        

    },

    {
        id:3,
        name:'Product c',
        price:1950,
        img:'A1-main.jpg',
        genre:{
            en:"men's shoe",
            fr:'chaussure homme',
            ru:'мужская обувь'
        },
        preview:['A2.jpg','A3.jpg'],
        solde:{
            active:false,
            percent:30
        },
        new:{
            active:false,
            text:'',
            dateExpiration:''
        },
        size:[
            {
                quantity:10,
                value:45
            },
            {
                quantity:10,
                value:35
            },
            {
                quantity:10,
                value:40
            },
            {
                quantity:10,
                value:41
            },
            {
                quantity:10,
                value:42
            },
        ],
        color:[],
        model:{
            preview:['A-model-main.jpg','A-model.jpg'],
        },
        device:{
            en:'$',
            fr:'Є',
            ru:'₽'
        },
        categorie:'addidas'
        
    },

    {
        id:4,
        name:'Product d',
        price:350,
        img:'A1-main.jpg',
        genre:{
            en:"men's shoe",
            fr:'chaussure homme',
            ru:'мужская обувь'
        },
        preview:['A2.jpg','A3.jpg'],
        solde:{
            active:false,
            percent:30,
            lang:{
                fr:`reduction de`,
                ru:'скидка на',
                en:'discount'
            }
        },
        new:{
            active:false,
            text:'',
            dateExpiration:''
        },
        size:[
            {
                quantity:10,
                value:45
            },
            {
                quantity:10,
                value:35
            },
            {
                quantity:10,
                value:40
            },
            {
                quantity:10,
                value:41
            },
            {
                quantity:10,
                value:42
            },
        ],
        color:[],
        model:{
            preview:['A-model-main.jpg','A-model.jpg'],
        },
        device:{
            en:'$',
            fr:'Є',
            ru:'₽'
        },
        categorie:'new balance'
        
    },

    {
        id:5,
        name:'Product e',
        price:950,
        img:'A1-main.jpg',
        genre:{
            en:"men's shoe",
            fr:'chaussure homme',
            ru:'мужская обувь'
        },
        preview:['A2.jpg','A3.jpg'],
        solde:{
            active:true,
            percent:30,
            lang:{
                fr:`reduction de`,
                ru:'скидка на',
                en:'discount'
            }
        },
        new:{
            active:false,
            text:'',
            dateExpiration:''
        },
        size:[
            {
                quantity:10,
                value:45
            },
            {
                quantity:10,
                value:35
            },
            {
                quantity:10,
                value:40
            },
            {
                quantity:10,
                value:41
            },
            {
                quantity:10,
                value:42
            },
        ],
        color:[],
        model:{
            preview:['A-model-main.jpg','A-model.jpg'],
        },
        device:{
            en:'$',
            fr:'Є',
            ru:'₽'
        },
        categorie:'nike'
        
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
                en:'popularity',
                ru:'популярности',
                fr:'popularité'
            },
            {
                id:3,
                en:'alphabetically',
                ru:'алфавиту',
                fr:'alphabétiquement'
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