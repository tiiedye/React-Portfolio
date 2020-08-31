import React from "react";
import StickyNav from "../components/StickyNav/StickyNav";

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
        <div>
            <StickyNav />
            <div className="container">
                <h1>Portfolio</h1>

                    <h2 id="Projects">Projects</h2>
                    <hr />
                    <p></p>

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

                    <div className="container row text-center">
                        <div className="col-md-4">
                            <img src={require("../assets/Selfcare-sidekick.png")} alt="Selfcare Sidekick" style={styles.img}></img>
                        </div>

                        <div className="col-md-8">
                            <a style={styles.projectTitle} href="https://selfcare-sidekick.herokuapp.com/" target="_blank" rel="noopener noreferrer">Self Care Sidekick</a>
                            <br />
                            An app to care for a digital pet while taking care of yourself.
                            <p>
                                <b>+</b> Allows for account creation and login
                                <br />
                                <b>+</b> Makes use of databases to add, track, and complete activities
                                <br />
                                <a href="https://github.com/tiiedye/personal_pet" target="_blank" rel="noopener noreferrer">Repo</a>
                            </p>
                        </div>
                    </div>

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

                <h2 id="WebApps">Web Apps</h2>
                <hr />
                <p></p>

                <div className="text-center">
                    <p>
                        <h5>User Directory</h5>
                        <img src={require("../assets/user-directory.png")} alt="User Directory" style={styles.other}></img>
                        <br />
                        an example User Directory using React.
                        <br />
                        + Uses React components to create a 1-page App.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/User-Directory" target="_blank" rel="noopener noreferrer">Repo</a>
                        <br />
                        <a class="a" href="https://tiiedye.github.io/User-Directory/" target="_blank" rel="noopener noreferrer">Deployed</a>
                    </p>

                    <p>
                        <h5>Burger Logger</h5>
                        <img src={require("../assets/burger-logger.png")} alt="Burger Logger" style={styles.other}></img>
                        <br />
                        a fun little app that lets you "devour" burgers.
                        <br />
                        + Working with creating and updating API's
                        <br />
                        <a class="a" href="https://github.com/tiiedye/13-Burger-Logger" target="_blank" rel="noopener noreferrer">Repo</a>
                        <br />
                        <a class="a" href="https://immense-depths-45931.herokuapp.com/" target="_blank" rel="noopener noreferrer">Deployed</a>
                    </p>

                    <p>
                        <h5>Weather App</h5>
                        <img src={require("../assets/weather-app.png")} alt="Weather App" style={styles.other}></img>
                        <br />
                        A small weather app, where you can enter a location and see the daily and weekly forcast.
                        <br />
                        + Uses Local Storage and API calls
                        <br />
                        <a class="a" href="https://github.com/tiiedye/06-weather-app" target="_blank" rel="noopener noreferrer">Repo</a>
                        <br />
                        <a class="a" href="https://tiiedye.github.io/06-weather-app/" target="_blank" rel="noopener noreferrer">Deployed</a>
                    </p>

                    <p>
                        <h5>Day Planner</h5> 
                        <img src={require("../assets/day-planner.png")} alt="Day Planner" style={styles.other}></img>
                        <br />  
                        A small day-planner app that lets you organize your day!
                        <br />
                        + Makes use of Local Storage
                        <br />                   
                        <a class="a" href="https://github.com/tiiedye/05-day-planner" target="_blank" rel="noopener noreferrer">Repo</a>
                        <br />
                        <a class="a" href="https://tiiedye.github.io/05-day-planner/" target="_blank" rel="noopener noreferrer">Deployed</a>
                    </p>
                </div>

                <h2 id="CLIApps">CLI Apps</h2>
                <hr />
                <p></p>

                <div className="text-center">
                    <p>
                        <h5>CLI Cipher With Strings App</h5>
                        <img src={require("../assets/cipher-with-strings.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple CLI program using C++ that uses a substitution cipher to encrypt and decrypt messages.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Cipher-with-Strings" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>CLI Playing With Numbers App</h5>
                        <img src={require("../assets/playing-with-numbers.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple CLI program using C++ that uses a substitution cipher to encrypt and decrypt messages.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/playing-with-numbers" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>CLI Got Change?? App</h5>
                        <img src={require("../assets/got-change.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple CLI app that uses operators in C++ to determine the value of your cents, 
                        and organizes them into: dollars, quarters, dimes, nickles, and pennies.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/got-change" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Employee Tracker</h5>
                        <img src={require("../assets/employee-tracker.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        a solution for managing a company's employees using node, inquirer, and MySQL.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/12-Employee-Tracker" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Team-Page Generator</h5>
                        <img src={require("../assets/team-generator1.png")} alt="CLI" style={styles.other}></img>
                        <img src={require("../assets/team-generator2.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A Node CLI app that uses inquirer to build a Team Page. After answering all the questions in the Command 
                        Line it produces and HTML file in the output using the information given.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/10-team-generator" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;