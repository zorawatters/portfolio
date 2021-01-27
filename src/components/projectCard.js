import React, { Component } from "react"; //must import pictures to use as card backgrounds




export default class ProjectCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            tools: props.tools,
            desc: props.desc,
            link: props.link,
            img: props.img
        };
    }


    render() {
        return (
            <div className = "box">
                <div className = "img-Box">
                    <img src = {this.state.img} alt= "background" />
                </div>
                <div className = "card-content">
                    <div>
                        <h1> {this.state.name} </h1>
                        <h5> {this.state.tools} </h5>
                        <p> {this.state.desc} </p>
                        <div className = "links">
                            <a href={this.state.link} target="_blank">See on Github</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}