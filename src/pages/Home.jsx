//首页主页面
import {Layout} from 'antd';
import './Home.css'
import Footer from '../modules/Footer';
import Sider from '../modules/Sider';
import Content from '../modules/Content';
import React, { Component } from 'react';

const {Header} = Layout
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){

    }
    render() {
        return (
            <div>
                <Layout style={{ minHeight: '100vh' }}>
                    <Sider />
                    <Layout className="site-layout">
                        <Header className="site-layout-background" style={{ padding: 0 }} />
                        <Content />
                        <Footer />
                    </Layout>
                </Layout>
            </div>
        );
    }
}
export default Home;