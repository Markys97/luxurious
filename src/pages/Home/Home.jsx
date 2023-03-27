import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import './home.css'
import Header from '../../component/layout/Header/Header'
import Footer from '../../component/layout/Footer/Footer'
import Slider from '../../component/layout/Slider/Slider'
import ListCategorie from '../../component/layout/ListeCategorie/ListCategorie'


function Home() {
  const currentLang = useSelector(state => state.setting.lang.value)
  const pubs = [
    {
        img:`05.jpg`,
        canIBuy:true,
        description:'lorem ipsum'
    },
    {
        img:`06.jpg`,
        canIBuy:false,
        description:'lorem ipsum'
    },
    {
        img:`07.jpg`,
        canIBuy:false,
        description:'lorem ipsum'
    },
    {
        img:`08.jpg`,
        canIBuy:false,
        description:'lorem ipsum'
    },
    {
        img:`09.jpg`,
        canIBuy:true,
        description:'lorem ipsum'
    },
]
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


},[])

  return (
    <div className='home-wrapper'>
        <Header activeLink="Home"/>
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
        <Footer/>
    </div>
  )
}

export default Home