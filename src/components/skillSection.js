import React, { Component } from "react";

export default class SkillItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icon: props.icon,
            list: props.skillist,
            skillname: props.name
        };
    }

    render() {
        return (
            <div className = "swimlane">
                <div className = "icon">
                    <img src={this.state.icon} className="skill-icon" alt={this.state.skillname + " icon"} />
                </div>
                <div className = "skillset">
                    {this.state.list}
                </div>
            </div>
        )
    }
}