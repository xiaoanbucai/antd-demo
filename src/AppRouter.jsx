//路由页面
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'


function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/home/" component={Home}></Route>
        </Router>
    )
}

export default AppRouter;
