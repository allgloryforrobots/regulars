import React from "react"
import CardLayer from "./UI/CardLayer"
import { Layout } from 'antd'
const { Header, Footer, Content } = Layout
function App() {


  return (
    <div className="App">
        <Layout>
            <Header style={{
                background: '#0074D9',
                boxShadow: '0px 2px 4px 0px rgba(34, 60, 80, 0.2)'
            }}>
                <h1 style={{color: '#7FDBFF'}}>REGULARS-ИЗБУШКА</h1>
            </Header>
            <Content style={{padding: '1vw 3vw'}}>
                <CardLayer/>
            </Content>
            <Footer>© IT-дизель</Footer>
        </Layout>
    </div>
  )
}

export default App
