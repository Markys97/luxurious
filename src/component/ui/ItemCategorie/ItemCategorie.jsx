import { useRef,useEffect } from 'react'
import './itemCategorie.css'

function ItemCategorie({categorie:{img,name}}) {
  const imgWrapperRef = useRef()
  let baseNamePath = '/images/categorie/';

  useEffect(()=>{
    let wrapperImg = imgWrapperRef.current;
    let newImg = document.createElement('img');
    // wrapperImg.querySelector('img')
    newImg.src = baseNamePath+img;

    newImg.addEventListener('load',function(e){
      // this.src = baseNamePath+img;
     
      setTimeout(()=>{
        wrapperImg.querySelector('img').src=this.src
        wrapperImg.classList.remove('loading')
      },1000)
    })


 

    

  },[])
  return (
    <div  className="item-categorie">
        <div className="item-categorie__content">
            <div ref={imgWrapperRef} className="item-categorie__img loading">
                <img  src={`/images/icons/loader.gif`} alt={'name'} loading="lazy" />
            </div>
            <div className="item-categorie__name">{name}</div>
        </div>
    </div>
  )
}

export default ItemCategorie