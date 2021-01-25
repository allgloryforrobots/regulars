import React from "react"
import CardLayer from "./UI/CardLayer"
import './Universal.css'
import {Input, Menu} from 'antd'


const App: React.FC = () => {
    let [filter, setFilter] = React.useState<string>('Пользовательские данные')
    let [search, setSearch] = React.useState<string>('')

    // Ant Design spec type event
    const handleClick = (e: any) => {
        setFilter(e.key )
    }


    return (
        <div>
            <header style={{
                background: '#0074D9',
                minHeight: 60,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0px 2px 4px 0px rgba(34, 60, 80, 0.2)',
            }}>
                <div className="toCenter">
                    <h1 style={{color: '#7FDBFF', margin: 0}}>🏠 RegExp-Избушка</h1>
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
                    &mdash;&nbsp;<a rel="noreferrer"
                                    target="_blank"
                                    href="https://github.com/allgloryforrobots/regulars">
                        GitHub</a>
                </span>
                </footer>

            </div>
        </div>
    )
};

export default App
