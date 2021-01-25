import React from 'react'
import 'antd/dist/antd.css'
import data from '../data'
import CardItem from "./CardItem/CardItem"


interface ICardLayer {
    filter: string
    search: string
}

interface ICardItem {
    cardData: {
        validator: RegExp
        title: string
        tip: string
        specTip: string
        spec: string
        placeholder: string
    }
}

const CardLayer: React.FC<ICardLayer> = ({filter, search}) => {

    return (
        <div className="wrapGrid">
            {
                data.filter((el: { title: string | any[]; group: any; }) => {
                    if (filter === 'Search') {
                        return el.title.includes(search)
                    }

                    return el.group === filter
                }).map((cardData) => <CardItem cardData={cardData} key={Math.random()}/>)
            }
        </div>
    )
}

export default CardLayer