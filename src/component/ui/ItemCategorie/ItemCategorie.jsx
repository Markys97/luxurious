import './itemCategorie.css'

function ItemCategorie({categorie:{img,name}}) {
  return (
    <div  className="item-categorie">
        <div className="item-categorie__content">
            <div className="item-categorie__img">
                <img src={`/images/categorie/${img}`} alt={name} />
            </div>
            <div className="item-categorie__name">{name}</div>
        </div>
    </div>
  )
}

export default ItemCategorie