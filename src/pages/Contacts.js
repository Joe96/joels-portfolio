import React from "react";
import Navigation from "../components/Navigation";
import EmailForm from '../components/EmailForm';


const Welcome = () => {

    return (

        <div>
            <Navigation/>

            <div>
                <h1>Contact Information</h1>
            </div>

            <div>
                <h1>Email Form:</h1>
                <EmailForm />

            </div>

            <div>
                <div>
                    <h1>linkedin Button</h1>
                </div>
                
                <div>
                    <h1>Github Button</h1>
                </div> 
            </div>
     
        </div>
    );
}

export default Welcome;