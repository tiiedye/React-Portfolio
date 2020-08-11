import React from "react";

const styles = {
    img: {
        width: 200,
        marginBottom: 40
    },
    other: {
        width: 150
    },
    adventure: {
        width: 200,
        marginBottom: 40,
        marginTop: 20
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

                <h2>Projects</h2>
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
                        <br />
                        <a href="https://github.com/mykakugaya/foodies-and-movies" target="_blank" rel="noopener noreferrer">Repo</a>
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
                        <br />
                        <a href="https://github.com/sharlenemay/personal_pet" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>
                </div>
            </div>

            <div className="container row text-center">
                <div className="col-md-4">
                    <img src={require("../assets/adventure-home.png")} alt="Once Upon an Adventure" style={styles.adventure}></img>
                        <br />
                    <img src={require("../assets/adventure.png")} alt="Once Upon an Adventure" style={styles.img}></img>
                </div>

                <div className="col-md-8">
                    <a style={styles.projectTitle} href="https://onceuponanadventure.herokuapp.com/" target="_blank" rel="noopener noreferrer">Once Upon an Adventure</a>
                    <br />
                    An educational website that uses RPG mechanics and mini-games to teach math, spelling, and typing.
                    <p>
                        <b>+</b> A small RPG-like game with storytelling and adventure mechanics.
                        <br />
                        <b>+</b> Allows for account creation and login
                        <br />
                        <b>+</b> Provides an educational game with minigames based on JavaScript and Canvas, and using Grids.
                        <br />
                        <b>+</b> Game progress is saved to the user's account
                        <br />
                        <b>+</b> Uses api calls and databases to dynamically render specific sprite images dependant on the user's character choices.
                        <br />
                        <b>+</b> Made with React, using both functional and class components
                        <br />
                        <a href="https://github.com/AnnaxGrace/once-upon-an-adventure" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>
                </div>
            </div>

            <h2>Other Works</h2>
            <hr />
            <p></p>

            <div className="text-center">
                <p>
                    <h5>Day Planner</h5> 
                    <img src={require("../assets/day-planner.png")} alt="Day Planner" style={styles.other}></img>
                    <br />  
                    A small day-planner app that lets you organize your day!
                    <br />                   
                    <a class="a" href="https://github.com/tiiedye/05-day-planner" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/05-day-planner/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>Weather App</h5>
                    <img src={require("../assets/weather-app.png")} alt="Weather App" style={styles.other}></img>
                    <br />
                    A small weather app, where you can enter a location and see the daily and weekly forcast.
                    <br />
                    <a class="a" href="https://github.com/tiiedye/06-weather-app" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/06-weather-app/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>Burger Logger</h5>
                    <img src={require("../assets/burger-logger.png")} alt="Burger Logger" style={styles.other}></img>
                    <br />
                    a fun little app that lets you "devour" burgers.
                    <br />
                    <a class="a" href="https://github.com/tiiedye/13-Burger-Logger" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://immense-depths-45931.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>

                <p>
                    <h5>CLI Employee Tracker</h5>
                    A Command-line app that lets you add and manage employees.
                    <br />
                    <a class="a" href="https://github.com/tiiedye/12-Employee-Tracker" target="_blank" rel="noopener noreferrer">Repo</a>
                </p>

                <p>
                    <h5>User Directory</h5>
                    <img src={require("../assets/user-directory.png")} alt="User Directory" style={styles.other}></img>
                    <br />
                    an example User Directory using React.
                    <br />
                    <a class="a" href="https://github.com/tiiedye/User-Directory" target="_blank" rel="noopener noreferrer">Repo</a>
                    <br />
                    <a class="a" href="https://tiiedye.github.io/User-Directory/" target="_blank" rel="noopener noreferrer">Deployed</a>
                </p>
            </div>
        </div>
    )
}

export default Portfolio;