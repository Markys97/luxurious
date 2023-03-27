import './filter.css';
import { useSelector,useDispatch} from 'react-redux'
import { setCategoty } from '../../../redux/slide/product/productSlide';

function Filter() {
    const listCategory = useSelector(state=> state.product.category);
    const currentLang =useSelector(state=> state.setting.lang.value)
    const dispatch = useDispatch();
    const toggleActiveCategory = (idCategory)=> {     
        dispatch(setCategoty(idCategory))
    }

  return (
    <div className="filter">
        <div className="filter__container">
            <div className="filter__content">
                <div className="filter__row">                    
                    {
                        listCategory.map((category,id)=>(
                            <div onClick={()=> toggleActiveCategory(category.id)} key={id} className={`item-filter ${ category.isActive? 'active':''}`}>
                                {
                                    !category.isBrand  ? category.lang[currentLang]: category.name
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter