import React, { Component } from 'react'
import '../header.css'

export class Header extends Component {
    render() {
        return (
            <div className="header-main">
                <div className="header-anchors">
                        <a href="#">About</a>
                        <a href="#">The vision</a>
                        <a href="#">Contact Us</a>
                        <a href="#">Sponsor Us</a>
                </div>
            </div>
        )
    }
}

export default Header
