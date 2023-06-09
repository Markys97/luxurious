import { useState,useRef} from 'react'
import './trie.css'
import { useSelector,useDispatch} from 'react-redux'

import { setActiveItemTrie,setProductToShow } from '../../../redux/slide/product/productSlide'

export const getCurrentItemTrie = (activeItemTrie,itemTrieListLang) =>(
    itemTrieListLang.find(item => item.id === activeItemTrie
))

function Trie() {
    const dispatch= useDispatch()
    const {activeItemTrie,itemTrieListLang }= useSelector(state=>state.product.trieHandler)
    const [isOpenBodyTrie, setIsOpenBodyTrie] = useState(false)
    const textTrieLang = useSelector(state=> state.setting.trieTextLang)
    const currentLang = useSelector(state=> state.setting.lang.value)
    

    const getNoActiveItemTrieLang = (itemTrieListLang)=> {
       return itemTrieListLang.filter((item,index)=> item.id !== activeItemTrie)
    }

    const changecurrentTrie = (id) => {
        dispatch(setActiveItemTrie(id))
        setIsOpenBodyTrie(false);
    }

    let bodyListTrieItemLang = getNoActiveItemTrieLang(itemTrieListLang)
    const currentItemTrie = getCurrentItemTrie(activeItemTrie,itemTrieListLang)
  return (
        <div className="trie">
            <div className="trie__content">
                <div onClick={()=> setIsOpenBodyTrie(prev=> !prev)} className="trie__head">
                    <div className="trie__title">
                        <div className={`trie__title-icon ${isOpenBodyTrie?' trie-body-open':''}`}>
                            <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z" fill="#2C2C2C"/>
                            </svg>
                        </div>

                        <div className="trie__title-text">
                          {`${textTrieLang.title[currentLang]}:`}
                        </div>
                    </div>

                    <div className="trie__currentValue">
                        {
                           currentItemTrie[currentLang]
                        }
                    </div>
                </div>

                {
                    isOpenBodyTrie && (
                        <div className="trie__body">
                            {
                                bodyListTrieItemLang.map((item,index)=>(
                                    <div key={index} onClick={()=> changecurrentTrie(item.id)}  className="trie__item">
                                        {item[currentLang]}
                                    </div>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </div>
  )
}

export default Trie