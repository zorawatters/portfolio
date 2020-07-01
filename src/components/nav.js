import React, { Component } from 'react';
import NavItem from "./navItem";

export default class Nav extends Component {
    render() {
        return(
            <nav className="nav" id = "navbar">
                <div className = "big-nav-boi">
                    <ul className = "nav-sections">
                        <NavItem section = "about" linkTo = "section1" />
                        <NavItem section = "projects" linkTo = "section2" />
                        {/* <NavItem section = "design" linkTo = "section3" /> */}
                    </ul>
                </div>
            </nav>
        );
    }
}