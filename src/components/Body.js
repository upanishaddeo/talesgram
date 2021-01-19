import React, { Component } from 'react';
import Header from '../components/Header';
import '../css/Body.css'
import HomeLanding from './HomeLanding';

export class Body extends Component {
    render() {
        return (
            <div className="main-bg">
                <Header />
                <HomeLanding />
            </div>
        )
    }
}

export default Body
