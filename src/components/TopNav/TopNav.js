import React, { Component } from 'react';
import './TopNav.css';

import rageLogo from "../../assets/RAGE CORPS LOGO-02.png";


export default class TopNav extends Component {
    render() {
        return (
            <nav className="nav-bar">
                <div className="nav-title-wrapper">
                    <img
                        alt="rage logo"
                        className="nav-rage-logo"
                        src={rageLogo}
                    />
                </div>
            </nav>
        );
    }
}