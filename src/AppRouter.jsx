//路由页面
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Firstpage from './pages/Firstpage';

function AppRouter() {
    return (
        <Router>
            <Route path="/" exact component={Login}></Route>
            <Route path="/home/" component={Home}></Route>
            <Route path="/Firstpage/" component={Firstpage}></Route>
        </Router>
    )
}

export default AppRouter;
