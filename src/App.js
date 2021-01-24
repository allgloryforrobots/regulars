import React from "react"
import CardLayer from "./UI/CardLayer"
import './Universal.css'
import {Input, Menu} from 'antd'

function App() {
    let [filter, setFilter] = React.useState('Пользовательские данные')
    let [search, setSearch] = React.useState('')

    const handleClick = e => {
        setFilter(e.key )
    }

    return (
        <>
            <header style={{
                background: '#0074D9',
                minHeight: 60,
                boxShadow: '0px 2px 4px 0px rgba(34, 60, 80, 0.2)',
            }}>
                <div className="toCenter">
                    <h1 style={{color: '#7FDBFF'}}>🏠 RegExp-Избушка</h1>
                </div>
            </header>

            <div className="toCenter">
                <Menu mode="horizontal" onClick={handleClick} selectedKeys={[filter]}>
                    <Menu.Item key="Пользовательские данные">
                        Пользовательские данные
                    </Menu.Item>
                    <Menu.Item key="Распространенные форматы">
                        Распространенные форматы
                    </Menu.Item>
                    <Menu.Item key="Числа">
                        Числа
                    </Menu.Item>
                    <Menu.Item key="Web">
                        Web
                    </Menu.Item>
                    <Menu.Item key="Search">
                        <Input style={{
                            borderRadius: 25,
                            width: 250
                        }}
                        onChange={e => setSearch(e.target.value)}
                        placeholder="Поиск" />
                    </Menu.Item>
                </Menu>



                <main>
                    <CardLayer filter={filter} search={search}/>
                </main>


                <footer className="toCenter" style={{marginTop: 20}}>
                <span>2020 © IT-дизель
                    &mdash;&nbsp;<a rel="noreferrer" target="_blank" href="https://github.com/allgloryforrobots/regulars">GitHub</a>
                </span>
                </footer>

            </div>
        </>
    )
}

export default App
