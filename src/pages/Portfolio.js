import React from "react";

const styles = {
    img: {
        width: 200,
        marginBottom: 40
    },
    projectTitle: {
        fontFamily: "Satisfy",
        fontSize: 25
    }
}

function Portfolio() {
    return (
        <div className="container">
            <h1>Portfolio</h1>

                <h2>Group Projects</h2>
                <hr />
                <p></p>

            <div className="container row text-center">
                <div className="col-md-4">
                    <img src={require("../images/foodies-and-movies-thumb.png")} alt="Foodies and Movies" style={styles.img}></img>
                </div>

                <div className="col-md-8">
                    <a style={styles.projectTitle} href="https://tiiedye.github.io/foodies-and-movies/" target="_blank" rel="noopener noreferrer">Foodies & Movies</a>
                    <br />
                    An app to find food and drink recipes, and random movies.
                </div>
            </div>

            <div className="container row text-center">
                <div className="col-md-4">
                    <img src={require("../images/Selfcare-sidekick.png")} alt="Selfcare Sidekick" style={styles.img}></img>
                </div>

                <div className="col-md-8">
                    <a style={styles.projectTitle} href="https://personal-pet.herokuapp.com/" target="_blank" rel="noopener noreferrer">Self Care Sidekick</a>
                    <br />
                    An app to care for a digital pet while taking care of yourself.
                </div>
            </div>

            <h2>Other Works</h2>
            <hr />
            <p></p>

            <div className="text-center">
                <p>
                    <h5>Day Planner</h5>                      
                    <a class="a" href="https://github.com/tiiedye/05-day-planner" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/05-day-planner/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>Weather App</h5>
                    <a class="a" href="https://github.com/tiiedye/06-weather-app" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/06-weather-app/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>Burger Logger</h5>
                    <a class="a" href="https://github.com/tiiedye/13-Burger-Logger" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://immense-depths-45931.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>CLI Employee Tracker</h5>
                    <a class="a" href="https://github.com/tiiedye/12-Employee-Tracker" target="_blank" rel="noopener noreferrer">Repo</a>
                </p>
            </div>
        </div>
    )
}

export default Portfolio;