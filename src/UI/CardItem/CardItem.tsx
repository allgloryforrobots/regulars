import React from 'react'
import {Card, Input, message, Popover, Space, Typography} from "antd"
import InfoCircleTwoTone from "@ant-design/icons/lib/icons/InfoCircleTwoTone"
import PlusCircleTwoTone from "@ant-design/icons/lib/icons/PlusCircleTwoTone"
import MinusCircleTwoTone from "@ant-design/icons/lib/icons/MinusCircleTwoTone"
import './CardItem.css'

const { Text } = Typography



interface ICardItem {
    cardData: {
        validator: RegExp
        title: string
        tip?: string
        specTip?: string
        spec?: string
        placeholder: string
        group: string
    }
}

const CardItem: React.FC<ICardItem> = ({cardData}) => {

    let [result, setSuccess] = React.useState<string>('invisible')
    let [error, setError] = React.useState<string>('invisible')

    const onRegClick = (e: any) => {
        navigator.clipboard.writeText(e.target.value)
        message.info('Copied!')
    }

    const onChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  marginTop: '25px'
              }}
              title={cardData.title}
              extra={
                  <>    {cardData.tip ?
                      <Popover
                          overlayStyle={{
                              maxWidth: 400
                          }}
                          content={<p>{cardData.tip}</p>}>
                          <InfoCircleTwoTone/>&nbsp;
                      </Popover> : null
                  }


                          {cardData.spec ?
                              <Popover
                                  overlayStyle={{
                                      maxWidth: 400
                                  }}
                                  content={<p>{cardData.specTip}</p>}>
                                  &nbsp;{cardData.spec}
                              </Popover>
                              : null}
                  </>
              }
        >
            <Space direction="vertical">
                <Input
                    value={String(cardData.validator)}
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
                       onChange={e => onChangeText(e)}
                />
                    <span className={result}><PlusCircleTwoTone twoToneColor="#52c41a"/><Text type="success">  Совпало!</Text></span>
                    <span className={error}><MinusCircleTwoTone twoToneColor="#FF4136"/> <Text type="danger"> Не совпало!</Text></span>
            </Space>
        </Card>
    )
};

export default CardItem