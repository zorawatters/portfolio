import React, { Component } from "react";
import ProjectCard from "./projectCard";
import calitrees from '../img/calitrees.png'
import firetrees from '../img/firetrees.png'
import trees from '../img/trees.png'
import moss from '../img/moss.png'
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
                            name = "A* Visualizer" 
                            tools = "python | pygame"
                            desc = "A PyGame app to visualize how A* search works. In the future it will have a more user-friendly UI and the ability to visualize multiple searching algorithms. Info on how to use and video of the app in Github."
                            link = "https://github.com/zorawatters/search-algo-visualizer"
                            img = {moss}
                        />

                        < ProjectCard 
                            name = "DeepStock" 
                            tools = "python | flask | GCP | mongoDB | twitter API"
                            desc = "A group project for Big Data Architecture that blends daily stock data and twitter sentiment so users can predict how to invest in their favorite tech companies."
                            link = "https://github.com/zorawatters/deepstock-reupload"
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