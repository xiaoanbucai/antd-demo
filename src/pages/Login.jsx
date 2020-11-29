//登陆页面
import React, { Component } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './Login.css';

class Login extends Component {
     constructor(props) {
          super(props);
          this.state = {
               username: '',
               password: '',
          }
     }

     componentDidMount() {

     }
     onLogin = () => {

          window.location.href = "http://localhost:3000/Home/";

     }

     onFinish = (values) => {
          console.log('Success:', values);
     };

     onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
     };

     render() {
          return (
              
                    <div className="login-block">
                         <p>居委会行政服务宣传管理系统</p>
                    
                    <div className="login-content">
                         <Form
                              name="normal_login"
                              className="login-form"
                              initialValues={{
                                   remember: true,
                              }}
                              onFinish={this.onFinish}
                              onFinishFailed={this.onFinishFailed}
                         >
                              <Form.Item
                                   name="username"
                                   rules={[
                                        {
                                             required: true,
                                             message: '请输入用户名！',
                                        },
                                   ]}
                              >
                                   <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
                              </Form.Item>
                              <Form.Item
                                   name="password"
                                   rules={[
                                        {
                                             required: true,
                                             message: '请输入密码!',
                                        },
                                   ]}
                              >
                                   <Input.Password
                                        prefix={<LockOutlined className="site-form-item-icon" />}
                                        type="password"
                                        placeholder="请输入密码"
                                   />
                              </Form.Item>
                              <Form.Item>
                                   <Form.Item name="remember" valuePropName="checked" className="login-form-login">
                                        <Checkbox>记住账号</Checkbox>
                                   </Form.Item>
                                   <a className="login-form-forgot" href="/">
                                        忘记密码？
                 </a>
                              </Form.Item>
                              <Form.Item>
                                   <Button
                                        type="primary"
                                        htmlType="submit"
                                        className="login-form-button"
                                        onClick={this.onLogin}
                                   >
                                        登录
                 </Button>
                              </Form.Item>
                         </Form>
                    </div>
               </div>

          );
     };
}
export default Login;