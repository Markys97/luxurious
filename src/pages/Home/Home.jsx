import './home.css'
import Header from '../../component/layout/Header/Header'
import Footer from '../../component/layout/Footer/Footer'

function Home() {
  return (
    <div className='site-wrapper'>
        <Header/>
          <main className='site-body test'>
          </main>
        <Footer/>
    </div>
  )
}

export default Home