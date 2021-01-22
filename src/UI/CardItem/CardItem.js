import React from 'react'
import {Card, Input, message, Popover, Space, Typography} from "antd"
import InfoCircleTwoTone from "@ant-design/icons/lib/icons/InfoCircleTwoTone"
import PlusCircleTwoTone from "@ant-design/icons/lib/icons/PlusCircleTwoTone"
import MinusCircleTwoTone from "@ant-design/icons/lib/icons/MinusCircleTwoTone"
import './CardItem.css'
const { Text } = Typography

function CardItem({cardData}) {

    let [result, setSuccess] = React.useState('invisible')
    let [error, setError] = React.useState('invisible')

    let [text, setText] = React.useState('')



    const onRegClick = e => {
        navigator.clipboard.writeText(e.target.value)
        message.info('Copied!')
    }

    const onChangeText = e => {
        setText(e.target.value)
        if (cardData.validator.test(e.target.value)) {
            setSuccess('visible')
            setError('invisible')
        } else {
            setSuccess('invisible')
            setError('visible')
        }

    }

    return (
        <Card type="inner"
              style={{
                  width: 300,
                  minHeight: 185,
                  margin: 10
              }}
              title={cardData.title}
              key={Math.random()}
              extra={
                  <Popover content={<p>{cardData.tip}</p>}>
                      <InfoCircleTwoTone/>
                  </Popover>
              }
        >
            <Space direction="vertical">
                <Input
                    value={cardData.validator}
                    style={{
                        borderRadius: 25,
                        width: 250
                    }}
                    onClick={onRegClick}
                    onFocus={e => e.target.blur()}
                />

                <Input placeholder={cardData.placeholder}
                       style={{
                           borderRadius: 25,
                           width: 250,
                           textAlign: 'center'
                       }}
                       value={text}
                       onChange={e => onChangeText(e, cardData.validator)}
                />
                    <span className={result}><PlusCircleTwoTone twoToneColor="#52c41a"/><Text type="success">  Совпало!</Text></span>
                    <span className={error}><MinusCircleTwoTone twoToneColor="#FF4136"/> <Text type="danger"> Не совпало!</Text></span>
            </Space>
        </Card>
    )
}

export default CardItem