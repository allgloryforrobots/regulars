import React from 'react'
import 'antd/dist/antd.css'
import data from '../data'
import CardItem from "./CardItem/CardItem"


function CardLayer({filter, search}) {
    console.log(filter, search)
    return (
        <div className="wrapGrid">
            {
                data.filter(el => {
                    if (filter === 'Search') {
                        return el.title.includes(search)
                    }

                    return el.group === filter
                }).map(cardData => <CardItem cardData={cardData} key={cardData.validator}/>)
            }
        </div>
    )
}

export default CardLayer