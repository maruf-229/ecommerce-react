import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom";
import Index from "../components/Index";
import Layout from "./Layout";
import Footer from "./Footer";

class Common extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Layout/>
                    <Switch>
                        <Route exact path="/" component={Index} />
                    </Switch>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default Common;