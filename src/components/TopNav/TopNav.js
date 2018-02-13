import React, { Component } from 'react';
import './TopNav.css';

import rageLogo from "../../assets/RAGE CORPS LOGO-06.png";
import rageCorps from "../../assets/RAGE CORPS LOGO-03.png";

export default class TopNav extends Component {

    constructor() {
        super();
        this.state = {
            width: window.innerWidth,
        };
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;
        const isMobile = width <= 500;
        if (isMobile) {
            return (
                <p>mobile test</p>
            )
        } else {
            return (
                <nav className="nav-bar">
                    <div className="nav-menu-wrapper">
                        <div className="nav-title-wrapper">
                            <img
                                alt="rage logo"
                                className="nav-rage-logo"
                                src={rageLogo}
                            />
                            <img
                                alt="rage corps"
                                className="nav-rage-corps"
                                src={rageCorps}
                            />
                        </div>
                        <p>HOME</p>
                        <p>STORE</p>
                        <p>ABOUT</p>
                    </div>
                </nav>
            )
        };
    }
}