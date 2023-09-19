import React from "react";
import Navigation from "../components/Navigation";
import Image from "../components/Image";
import '../Style.css';

const Welcome = () => {

    return (

        <div>
            <Navigation />
            <div className="centered-div">
                <div>
                    <div>
                        <Image />
                    </div>
                    <h1>Welcome to my website.</h1>
                    <h1>I am a self taught Software Developer.</h1>
                </div>
            </div>
        </div>

    );

}

export default Welcome;