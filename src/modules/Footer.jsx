import React, { Component } from 'react';
import { Layout } from 'antd';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount() {

    }
    render() {
        const { Footer } = Layout;
        return (
            <Footer style={{ textAlign: 'center' }}>系统 ©2021 Created by AN@ZHU</Footer>
        );
    }
}
export default Footer;