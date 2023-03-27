import './filter.css';

function Filter() {
  return (
    <div className="filter">
        <div className="filter__container">
            <div className="filter__content">
                <div className="filter__row">
                    <div className="item-filter active">
                        Все
                    </div>
                    <div className="item-filter">
                        Мясные
                    </div>

                    <div className="item-filter">
                        Вегетарианская
                    </div>

                    <div className="item-filter">
                        Гриль
                    </div>

                    <div className="item-filter">
                        Острые
                    </div>

                    <div className="item-filter">
                        Закрытые
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter