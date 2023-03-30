import './catalog.css'
import Header from "../../component/layout/Header/Header"
import Footer from "../../component/layout/Footer/Footer"
import Filter from '../../component/layout/Filter/Filter'
import Trie from '../../component/ui/Trie/Trie'
import ListProduct from '../../component/layout/ListProduct/ListProduct'

function Catalog() {
  return (
    <div className="catalog-page wrapper">
        <Header activeLink="catalog" />
            <main className="catalog-main">
                <div className="catalog-head">
                    <Filter/>
                    <Trie/>
                </div>
                <section className='catalog-product'>
                  <div className="catalog-product__content">
                    <h2 className="catalog-product__title">Title</h2>
                      <ListProduct/>
                  </div>
                </section>
            </main>
        <Footer/>
    </div>
  )
}

export default Catalog