import './listCategorie.css'
import ItemCategorie from '../../ui/ItemCategorie/ItemCategorie'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState,useEffect } from 'react'
import axios from 'axios'


function ListCategorie() {
    const currentLang = useSelector(state => state.setting.lang.value)
    const [categotiList, setCategotiList] = useState([])
   
    const textTitle = {
        lang:{
            fr:'toutes les Marques',
            en:'all Brand',
            ru:'все Бренди'
        }
    }

    useEffect(()=>{

        axios.get('http://localhost:3500/listCategory')
        .then(res => {
          if(res.status === 200){
            setCategotiList(res.data)
          }
        })
      },[])

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
                    categotiList.map((itemCategorie,index) => (
                        <Link key={index} to={`brands/${itemCategorie.name.toLowerCase()}`}>
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