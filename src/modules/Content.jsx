import React, { Component } from 'react';
import { Breadcrumb, Layout } from 'antd';
import Firstpage from '../pages/Firstpage';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  componentDidMount() {

  }
  render() {
    const { Content } = Layout;
    return (
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Firstpage></Firstpage>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          Bill is a cat.
            </div>
      </Content>
    );
  }
}
export default Content;