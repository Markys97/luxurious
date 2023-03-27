import './catalog.css'
import Header from "../../component/layout/Header/Header"
import Footer from "../../component/layout/Footer/Footer"
import Filter from '../../component/layout/Filter/Filter'
import Trie from '../../component/ui/Trie/Trie'

function Catalog() {
  return (
    <div className="catalog-page wrapper">
        <Header activeLink="catalog" />
            <main className="catalog-main">
                <div className="catalog-head">
                    <Filter/>
                    <Trie/>
                </div>
            </main>
        <Footer/>
    </div>
  )
}

export default Catalog