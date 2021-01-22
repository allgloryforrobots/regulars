import React from 'react'
import 'antd/dist/antd.css'
import data from '../data'
import CardItem from "./CardItem/CardItem"


function CardLayer() {

    return (
        <div className="wrapGrid">
            {
                data.map(cardData => <CardItem cardData={cardData} key={cardData.validator}/>)
            }
        </div>
    )
}

export default CardLayer