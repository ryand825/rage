import React, { Component } from 'react';
import './TopNav.css';
import MobileNav from './MobileNav/MobileNav';

import rageLogo from "../../assets/RAGE CORPS LOGO-06.png";
import rageCorps from "../../assets/RAGE CORPS LOGO-03.png";

export default class TopNav extends Component {
    render() {
        return (
            <header>
                <div className="nav-bar">
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
                    <label for="open">
                        <span className="hamburger"></span>    
                    </label>
                    <input type="checkbox" name="" id="open" />
                    <div className="menu">
                    <p>HOME</p>
                    <p>STORE</p>
                    <p>ABOUT</p>
                    </div>


                </div>
            </header>
        )
    };
    // constructor() {
    //     super();
    //     this.state = {
    //         width: window.innerWidth,
    //     };
    // }

    // componentWillMount() {
    //     window.addEventListener('resize', this.handleWindowSizeChange);
    // }

    // componentWillUnmount() {
    //     window.removeEventListener('resize', this.handleWindowSizeChange);
    // }

    // handleWindowSizeChange = () => {
    //     this.setState({ width: window.innerWidth });
    // };

    // render() {
    //     const { width } = this.state;
    //     const isMobile = width <= 500;
    //     if (isMobile) {
    //         var menuClass = "mobile-menu";
    //     } else {
    //         var menuClass = "desk-menu";
    //     }
    //     return (
    //         <div top-nav>
    //             <div className="nav-bar">

    //                 <div className="nav-title-wrapper">
    //                     <img
    //                         alt="rage logo"
    //                         className="nav-rage-logo"
    //                         src={rageLogo}
    //                     />
    //                     <img
    //                         alt="rage corps"
    //                         className="nav-rage-corps"
    //                         src={rageCorps}
    //                     />
    //                 </div>
    //             </div>
    //             <div className={menuClass}>
    //                 <div><p>HOME</p></div>
    //                 <div><p>STORE</p></div>
    //                 <div><p>ABOUT</p></div>
    //             </div>
    //         </div>
    //     )
    // };
}