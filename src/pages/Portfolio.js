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
                    <img src={require("../assets/foodies-and-movies-thumb.png")} alt="Foodies and Movies" style={styles.img}></img>
                </div>

                <div className="col-md-8">
                    <a style={styles.projectTitle} href="https://tiiedye.github.io/foodies-and-movies/" target="_blank" rel="noopener noreferrer">Foodies & Movies</a>
                    <br />
                    An app to find food and drink recipes, and random movies.
                    <p>
                        <b>+</b> Uses a third-party API to gather recipe information
                        <br />
                        <b>+</b> Utilizes local storage to save food and drink recipes
                        <br />
                        <b>+</b> Picks a random movie using an API call to accompany your meal
                    </p>
                </div>
            </div>

            <div className="container row text-center">
                <div className="col-md-4">
                    <img src={require("../assets/Selfcare-sidekick.png")} alt="Selfcare Sidekick" style={styles.img}></img>
                </div>

                <div className="col-md-8">
                    <a style={styles.projectTitle} href="https://personal-pet.herokuapp.com/" target="_blank" rel="noopener noreferrer">Self Care Sidekick</a>
                    <br />
                    An app to care for a digital pet while taking care of yourself.
                    <p>
                        <b>+</b> Allows for account creation and login
                        <br />
                        <b>+</b> Makes use of databases to add, track, and complete activities
                    </p>
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

                <p>
                    <h5>User Directory</h5>
                    <a class="a" href="https://github.com/tiiedye/User-Directory" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/User-Directory/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>
            </div>
        </div>
    )
}

export default Portfolio;