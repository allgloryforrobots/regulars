import React from "react"
import CardLayer from "./UI/CardLayer"
import './Universal.css'
import {Menu} from 'antd';

function App() {

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
                <Menu mode="horizontal">
                    <Menu.Item key="mail">
                        Почта
                    </Menu.Item>
                    <Menu.Item key="uri">
                        Uri
                    </Menu.Item>
                    <Menu.Item key="number">
                        Цифры
                    </Menu.Item>
                    <Menu.Item key="string">
                        Строки
                    </Menu.Item>
                    <Menu.Item key="time">
                        Дата/Время
                    </Menu.Item>
                    <Menu.Item key="other">
                        Другое
                    </Menu.Item>
                </Menu>


                <main>
                    <CardLayer/>
                </main>


                <footer className="toCenter">
                <span>2020 © IT-дизель
                    &mdash;&nbsp;<a rel="noreferrer" target="_blank" href="https://github.com/allgloryforrobots/regulars">GitHub</a>
                </span>
                </footer>

            </div>
        </>
    )
}

export default App
