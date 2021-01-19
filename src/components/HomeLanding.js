import React, { Component } from 'react'
import '../css/HomeLanding.css'

export class HomeLanding extends Component {
    render() {
        return (
            <div className="container">
                <div className="col-main">
                    <div className="col-main-font">
                        <h1>TALESGRAM</h1>
                    </div>
                    <div className="col-main-about">
                        <p>FOR YOU AND YOUR TALES</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeLanding
