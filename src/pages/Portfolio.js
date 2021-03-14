import React from "react";
import StickyNav from "../components/StickyNav/StickyNav";

const styles = {
    img: {
        width: 200,
        marginBottom: 40
    },
    GalaxyShooter: {
        width: 200,
        marginBottom: 15
    },
    other: {
        width: 150
    },
    adventure: {
        width: 200,
        marginBottom: 40,
        marginTop: 25
    },
    projectTitle: {
        fontFamily: "Satisfy",
        fontSize: 25
    },
    awm: {
        height: 130,
        margin: 2
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
                            <img src={require("../assets/AWM1.png")} alt="Along With Me" style={styles.awm}></img>
                            <img src={require("../assets/AWM2.png")} alt="Along With Me" style={styles.awm}></img>
                            <br />
                            <img src={require("../assets/AWM4.png")} alt="Along With Me" style={styles.awm}></img>
                            <img src={require("../assets/AWM3.png")} alt="Along With Me" style={styles.awm}></img>
                        </div>

                        <div className="col-md-8">
                            <a style={styles.projectTitle} href="https://github.com/ThirdProjectDev/rnApp2021" target="_blank" rel="noopener noreferrer">Along With Me</a>
                            <br />
                            A demo phone app that has text excerpts from books. Specific words are highlighted and clickable, and will play a sound associated with that word (i.e.: "Fireplace" will produce the sound of a crackling forest.)
                            <p>
                                <b>+</b> Allows for authentication and account creation. Account information and settings are held in Firebase.
                                <br />
                                <b>+</b> Makes use of many node modules, some edited to work with this app, such as React Native Highlight Words.
                                <br />
                                <b>+</b> Account settings can be edited, and are saved in Firebase.
                                <br />
                                <a href="https://github.com/ThirdProjectDev/rnApp2021" target="_blank" rel="noopener noreferrer">Repo</a>
                                <br />
                                <a href="https://play.google.com/store/apps/details?id=com.rnapp2021" target="_blank" rel="noopener noreferrer">Google Play Store</a>
                            </p>
                        </div>
                    </div>

                    <div className="container row text-center">
                        <div className="col-md-4">
                            <img src={require("../assets/Galaxy_Shooter/Menu-to-game.gif")} alt="Galaxy Shooter" style={styles.GalaxyShooter}></img>
                            <br />
                            <img src={require("../assets/Galaxy_Shooter/beg-sprites.gif")} alt="Galaxy Shooter" style={styles.GalaxyShooter}></img>
                        </div>

                        <div className="col-md-8">
                            <a style={styles.projectTitle} href="#">Galaxy Shooter</a>
                            <br />
                            A Galaxy Shooter game made with Unity
                            <p>
                                <b>+</b> Has multiple game Scenes, including a main menu and the playable Game scene
                                <br />
                                <b>+</b> Has a Player that is movable with WASD keys, and shoots a Laser with the Space key.
                                <br />
                                <b>+</b> Destroyable Enemies and Asteroids with randomized spawning mechanics.
                                <br />
                                <b>+</b>  Power Ups that the player can pick up and use, including: a Shield, a Triple Shot, and a Speed Boots
                                <br />
                                <b>+</b> Full Animations and Sound Effects.
                                <br />

                                <a href="https://github.com/tiiedye/Galaxy-Shooter" target="_blank" rel="noopener noreferrer">Repo</a>
                                <br />
                                <a href="https://www.youtube.com/watch?v=4UknD06izHI" target="_blank" rel="noopener noreferrer">Video Link</a>
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
                        <h5>Stacks and Queues</h5>
                        <img src={require("../assets/stacks-and-queues.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        rewriting my previous palindrome project, but using stacks and queues. Functions exactly the same.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Stacks-and-Queues" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Sets, Maps, and Code, Oh My!</h5>
                        <img src={require("../assets/sets-maps.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        Simple app that reads a file and creates a map of words and how many times they were used, and a map of the words and a set of what lines those words appear on.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Sets-Maps-And-Code-Oh-My" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Play LIST Practice</h5>
                        <img src={require("../assets/play-list-practice.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple program that navigates through a list of songs (playlist) and prints them out on the console. Simulates a music player.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Play-List-Practice" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Fun with Palindromes</h5>
                        <img src={require("../assets/fun-with-palindromes.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        a simple CLI program that uses deques to sort through a string to determine if the string is a palindrome or not. There is a vector with test cases as well as a user interface that allows for users to input their own test strings.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Fun-With-Palindromes" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Practice with Output Streams</h5>
                        <img src={require("../assets/output-streams.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        simple program that copies the script of Romeo and Juliet from a .txt file, and creates another .txt file with a copy of the script and adds line numbers to it.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Practice-With-Output-Streams" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Romeo & Juliet Word Search</h5>
                        <img src={require("../assets/romeo-juliet-word-search.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple program that allows you to search for words within the script of Romeo & Juliet. This program makes use of fstream to open, read, and close files, and iomanip to add some formatting to the CLI.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Romeo-Juliet-Word-Search" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Reading Files Exercise</h5>
                        <img src={require("../assets/file-reading.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple exercise creating a file-reading app. The CLI app reads a .txt file and then prints out the student's names and test scores as well as the total average of the scores.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/File-Reading-Exercise" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Touring with Tables</h5>
                        <img src={require("../assets/Touring-with-Tables.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple app that displays a table with counties, cities, city population, and average travel cost to that city from Miami. Practicing working with making custom tables using C++ and CLI to display the table. Makes use of the Standard Library setw, setfill, setprecision, left, and right methods.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Touring-with-Tables" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Banking with Exceptions</h5>
                        <img src={require("../assets/Exception-Handling.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        Building upon my previous banking apps, adding custom exception handling.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Banking-With-Exceptions" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Playing with Smart Pointers</h5>
                        <img src={require("../assets/playing-with-smart-pointers.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A very simple app using smart-pointers and vectors. Uses unique_ptr, make_unique, and shared_ptr.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Playing-With-Smart-Pointers" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Polymorphic Bank App</h5>
                        <img src={require("../assets/polymorphic-bank-app.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        An app building upon my Simple Banking App, transforming it to use polymorphic code with abstract classes, class interfaces, virtual functions, and pointers.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Polymorphic-Bank-App" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Simple Bank App</h5>
                        <img src={require("../assets/simple-bank-app.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        using a super simple banking app to play around in Visual Studio. Learning class Inheritance, as well as how to organize VS projects/solutions and integrate with GitHub.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Simple-Bank-App" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Overloading-Operators 2.0</h5>
                        <img src={require("../assets/overloading-operators-2.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        Practice overloading operators using NON-MEMBER METHODS.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Overloading-Operators-2.0" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Overloading-Operators</h5>
                        <img src={require("../assets/overloading-operators.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        Practice overloading operators using MEMBER METHODS.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Overloading-Operators" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Movie Listings</h5>
                        <img src={require("../assets/movie-listings.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        a simple app that adds movies to a list and prints out their title, rating, and how many time's you've viewed them.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Movie-Listings" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Playing With Pointers</h5>
                        <img src={require("../assets/playing-with-pointers.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A really simple pointer exercise that multiplies the values in one array by the values in another array, and creates a third array that holds the results. The program then displays all three arrays.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/playing-with-pointers" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Cleaning App</h5>
                        <img src={require("../assets/cleaning-app.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        simple example carpet cleaning app using CLI and C++ that determines the cost of cleaning both small and large rooms.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/simple-cleaning-app" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

                    <p>
                        <h5>Letter Pyramid</h5>
                        <img src={require("../assets/letter-pyramid.png")} alt="CLI" style={styles.other}></img>
                        <br />  
                        A simple CLI program using C++ to create a pyramid out of the letters a user inputs.
                        <br />
                        <a class="a" href="https://github.com/tiiedye/Letter-Pyramid" target="_blank" rel="noopener noreferrer">Repo</a>
                    </p>

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