import React, { Component } from "react";
import Skills from "./skills";

export default class About extends Component {
    render() {
        return (
            <section id="section1">
                <div className = "about-content">
                    <div className = "about-me">
                        <h1> Hi, I'm Zora. </h1>
                        <p> 
                            I'm a recent grad from the University of Colorado Boulder with a Bachelor's in
                            Computer Science and a minor in Technology, Arts, and Media. I have experience 
                            working in an Agile workplace and am a <a href="link to cert"> certified </a> 
                            SAFe 4 Practioner, which means I'm always trying to apply lean philosophy to the 
                            way that I work - - ya girl is an ENFP, and that might tell you more than I can.
                        </p>
                        <p>
                            To me, the technology means remix. It is the unapologetic and constant replication of 
                            information, a theme echoed from almost all previous forms of media - its the most exciting
                            field to be in, and I'm so ready to contribute to bettering the world with it. As a budding
                            professional, my goal is to learn as much about the evolving world around 
                            me as I can and use that knowledge to one day develop technology for positive change. 
                            Through others I find comfort, and want to provide that same comfort to others.
                        </p>
                        <p>
                            I love playing with data, making art with technology, and working 
                            in group settings. My main interests are in the field of user experience, 
                            with an emphasis in creative technologies. More projects to come soon, so look out.
                        </p>
                        <p>
                            <a href="https://www.linkedin.com/in/zora-watters/" target="_blank"> linkedin </a> <a href = "https://github.com/zorawatters" target="_blank"> github </a> <a href = "mailto:zorawatters@gmail.com" target="_blank">  email </a>
                        </p>
                    </div>
                    < Skills />
                </div>
            </section>
        )
    }
}