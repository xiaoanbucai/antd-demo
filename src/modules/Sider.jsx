import React, { Component } from 'react';
import { Menu, Layout } from 'antd';
import {
  UsergroupAddOutlined,
  HomeTwoTone,
  QuestionCircleOutlined,
  TeamOutlined,
  VerifiedOutlined,
  NotificationOutlined,
  AuditOutlined,
  ContactsOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;
class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }
  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  handleClick = e => {
    console.log('click ', e);
    
  };

  render() {
    const { Sider } = Layout;
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" onClick={this.handleClick}>
          <Menu.Item key="1" icon={<HomeTwoTone />}>
            首页
              </Menu.Item>
          <SubMenu key="sub1" icon={<UsergroupAddOutlined />} title="居民管理">
            <Menu.Item key="2">居民信息</Menu.Item>
            <Menu.Item key="3">。。。</Menu.Item>
            <Menu.Item key="4">。。。</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<VerifiedOutlined />} title="代办业务">
            <Menu.Item key="5">代办就业证</Menu.Item>
            <Menu.Item key="6">代办准生证</Menu.Item>
            <Menu.Item key="7">代办医保</Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<ContactsOutlined />} title="帮扶业务">
            <Menu.Item key="8">低保手续办理</Menu.Item>
            <Menu.Item key="9">慈善救助办理</Menu.Item>
            <Menu.Item key="10">养老补助办理</Menu.Item>
            <Menu.Item key="11">孤儿生活补助金办理</Menu.Item>
          </SubMenu>
          <SubMenu key="sub4" icon={<TeamOutlined />} title="社区业务">
            <Menu.Item key="12">外来人口办理居住证</Menu.Item>
            <Menu.Item key="13">流动人口查验</Menu.Item>
          </SubMenu>
          <SubMenu key="sub5" icon={<AuditOutlined />} title="党团志愿">
            <Menu.Item key="14">党员关系迁移</Menu.Item>
            <Menu.Item key="15">缴纳党费</Menu.Item>
            <Menu.Item key="16">志愿服务</Menu.Item>
          </SubMenu>
          <SubMenu key="sub6" icon={<NotificationOutlined />} title="宣传服务">
            <Menu.Item key="17">Team 1</Menu.Item>
            <Menu.Item key="18">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="19" icon={<QuestionCircleOutlined />}>
            问题咨询
              </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default Sider;