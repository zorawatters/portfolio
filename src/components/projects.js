import React, { Component } from "react";
import ProjectCard from "./projectCard";
import calitrees from '../img/calitrees.png'
import firetrees from '../img/firetrees.png'
import trees from '../img/trees.png'
// import light from '../img/light.png'
// import loon from '../img/loon.png'

export default class Projects extends Component {
    render() {
        return (
            <section id="section2">
                <div className = "flexyboy">
                    <div className = "project-content">
                        <h1> Projects </h1>
                        <div className = "horizontal1"></div>
                        < ProjectCard 
                            name = "DeepStock" 
                            tools = "python | flask | GCP | mongoDB | twitter API"
                            desc = "A group project for Big Data Architecture that blends daily stock data and twitter sentiment so users can predict how to inverst in their favorite tech companies."
                            link = "https://github.com/CUBigDataClass/DeepStock"
                            img = {calitrees}
                        />

                        < ProjectCard 
                            name = "ImpressiGAN" 
                            tools = "python | CLI | cycleGAN | wiki art API"
                            desc = "An object-oriented command-line application which trains a neural model that converts a user-inputted picture into impressionist art with GAN architecture."
                            link = "https://github.com/JakeAndrus/impressiGAN"
                            img = {trees}
                        />

                        < ProjectCard 
                            name = "Amplify" 
                            tools = "node | three.js | angular | mongoDB | spotify API"
                            desc = "A Spotify companion app that analyzes your listening habits and visualizes the songs you play in 3D, originally meant to be turned into a VR-enabled application."
                            link = "https://github.com/Linus-Little-Darlings/Amplify-Project/tree/zoras-branch"
                            img = {firetrees}
                        />
                    </div>
                </div>
            </section>
        )
    }
}