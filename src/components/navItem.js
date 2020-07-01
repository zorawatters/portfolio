import React, { Component } from "react";
import { Link } from "react-scroll";

export default class NavItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            section: props.section,
            anchor: props.linkTo
        };
    }

    render() {
        return (
            <li className = "nav-section">
                <Link 
                    activeClass = "active"
                    to = {this.state.anchor}
                    spy = {true}
                    smooth = {true}
                    offset = {-70}
                    duration = {500}
                >
                    {this.state.section}
                </Link>
            </li>
        )
    }
}