import './listCategorie.css'
import ItemCategorie from '../../ui/ItemCategorie/ItemCategorie'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'


function ListCategorie() {
    const currentLang = useSelector(state => state.setting.lang.value)
    const listCategorie = [
        {
            id:1,
            name:'Nike',
            img:'nike.jpg'
        },
        {
            id:2,
            name:'Puma',
            img:'puma.jpg'
        },
        {
            id:3,
            name:'addidas',
            img:'addidas.jpg'
        },
        {
            id:4,
            name:'New Balance',
            img:'new_balance.jpg'
        },
    ]

    const textTitle = {
        lang:{
            fr:'toutes les Marques',
            en:'all Brand',
            ru:'все Бренди'
        }
    }
  return (
    <section className='list-categorie-sneaker'>
        <div className="list-categorie-sneaker__content">
            <h2 className="list-categorie-sneaker__title">
                {
                    textTitle.lang[currentLang]
                }
            </h2>
            <div className="list-categorie-sneaker__grid">
                {
                    listCategorie.map((itemCategorie,index) => (
                        <Link to={''}>
                            <ItemCategorie
                                key={index}
                                categorie={itemCategorie}
                            />
                        </Link>

                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default ListCategorie