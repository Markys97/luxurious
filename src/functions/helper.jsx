
export const loadImg = (imgParent,srcImgPath) =>{
    let wrapperImg = imgParent;
    wrapperImg.classList.add('loading')
    let newImg = document.createElement('img');
    // wrapperImg.querySelector('img')
    newImg.src = srcImgPath;

    newImg.addEventListener('load',function(e){

      setTimeout(()=>{
        wrapperImg.querySelector('img').src=this.src
        wrapperImg.classList.remove('loading')
      },1000)
    })
    
}

export const imgLoadingSrc = `/images/icons/loader.gif`;