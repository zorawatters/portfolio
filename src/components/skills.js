import React, { Component } from "react";
import SkillItem from "./skillSection";
import web from '../img/web.png';
import db from '../img/database.png';
import fw from '../img/framework.png';
import cloud from '../img/cloud.png';
import code from '../img/code.png';

// import pics here and pass as icon prop

export default class Skills extends Component {
    render() {
        return (
            <section id="section3">
                <div className = "skills-content">
                {/* cloud, langs, web, frameworks, db */}
                    <SkillItem icon = {cloud} skillist = "AWS, GCP, Travis CI" name = "cloud services" />
                    <SkillItem icon = {code} skillist = "Python, Java, C++" name = "software development" />
                    <SkillItem icon = {web} skillist = "HTML5, CSS3, Javascript" name = "web development" />
                    <SkillItem icon = {fw} skillist = "React, Node, Flask" name = "web framewords" />
                    <SkillItem icon = {db} skillist = "MongoDB, PostgreSQL, Systems Design" name = "databases"  />

                    <div className = "horizontal2"></div>
                    {/* <div>
                    <h1> Skills </h1>
                    </div> */}
                </div>
            </section>
        )
    }
}