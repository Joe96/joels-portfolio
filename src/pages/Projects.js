import React from "react";
import Navigation from "../components/Navigation";
import CardList from "../components/CardList";
import '../Style.css';

const Projects = () => {

    return (

        <div>
            <Navigation />
            <div class="container mt-5">
                <div class="row center-cards">
                    <div class="col-lg-12">
                        <CardList />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Projects;