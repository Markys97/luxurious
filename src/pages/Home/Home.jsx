import { useEffect,useState } from 'react'
import { useSelector } from 'react-redux'
import './home.css'
import Header from '../../component/layout/Header/Header'
import Footer from '../../component/layout/Footer/Footer'
import Slider from '../../component/layout/Slider/Slider'
import ListCategorie from '../../component/layout/ListeCategorie/ListCategorie'
import axios from 'axios'


function Home() {
  const currentLang = useSelector(state => state.setting.lang.value)
  const [pubs, setPub] = useState([]);
let titleWindow = {
  lang:{
    fr:'Accueil',
    en:'Home',
    ru:'Главная'
  }
}
document.title=`Luxurious | ${titleWindow.lang[currentLang]}`

useEffect(()=>{
  document.title=`Luxurious | ${titleWindow.lang[currentLang]}`
  let imgs = [...document.querySelectorAll('img')]
  imgs.forEach(img=> img.loading = 'lazy')

  axios.get('http://localhost:3500/recentProduct')
  .then(res => {
    if(res.status === 200){
      setPub(res.data)
    }
  })

},[])

  return (
    <div className='home-wrapper'>
          <main className='home-body wrapper'>

            <div className="home__banier">
                <Slider
                  slides={pubs}
                  showNavigation={false}
                  classHtml="home__slider"
                 />
            </div>

           <div className="home__categorie">
              <ListCategorie/>
           </div>

          </main>
    </div>
  )
}

export default Home