import {useState} from 'react'
import './listProduct.css'
import Product from '../../ui/Product/Product'
import { Link } from 'react-router-dom'

function ListProduct() {
    const listProduct = [
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
        {
            id:0,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:false,
                percent:10
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
            }
            

        },
        {
            id:1,
            name:'nike',
            price:'100',
            img:'A1-main.jpg',
            genre:{
                en:"men's shoe",
                fr:'chaussure homme',
                ru:'мужская обувь'
            },
            preview:['A2.jpg','A3.jpg'],
            solde:{
                active:true,
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
                fr:'€',
                ru:'₽'
            }
            

        },
       
    ]
    const [products,setProducts]=  useState(listProduct);

  return (
    <div className="list-product">
        {
            products.map((product,id)=>(
                <Link to="/">
                    <Product
                        key={id}
                        dataProduct={product}
                    />
                </Link>
            ))
        }
    </div>
  )
}

export default ListProduct