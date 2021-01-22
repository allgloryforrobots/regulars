import React from 'react'
import {Space} from "antd"
import 'antd/dist/antd.css'
import data from '../data'
import CardItem from "./CardItem/CardItem"


function CardLayer() {

    return (
        <Space size={[4, 16]} wrap>
            {
                data.map(cardData => <CardItem cardData={cardData}/>)
            }
        </Space>

    )
}

export default CardLayer