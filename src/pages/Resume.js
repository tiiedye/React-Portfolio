import React from "react";
import { Link } from "react-router-dom";
import PDF from "../assets/Resume.pdf"

function Resume() {
    return (
      <div className="container">
        <h1>Resume</h1>

        <div className="container pdf">
            <a href = {PDF} target = "_blank" rel="noopener noreferrer">
                <i class="far fa-file-pdf"></i> PDF File
            </a>
        </div>

        <div className="container text-center">
          <h2>Professional Summary</h2>
                <p>
                    Enthusiastic Coder eager to contribute to team success through hard
                    work, attention to detail and excellent organizational skills. Clear
                    understanding of Front-End and Back-End Web Development. Motivated
                    to learn, grow and excel in the Programming Industry.
                </p>

            <h2>Skills</h2>
                <p>
                    <b>+</b> HTML 5
                    <br />
                    <b>+</b> CSS
                    <br />
                    <b>+</b> JavaScript
                    <br />
                    <b>+</b> jQuery
                    <br />
                    <b>+</b> API's
                    <br />
                    <b>+</b> MySQL
                    <br />
                    <b>+</b> MongoDB
                    <br />
                    <b>+</b> Firebase
                    <br />
                    <b>+</b> Node
                    <br />
                    <b>+</b> Express
                    <br />
                    <b>+</b> React
                    <br />
                    <b>+</b> C
                    <br />
                    <b>+</b> C++
                    <br />
                    <b>+</b> C#
                </p>

            <h2>Experience</h2>
                <p>
                    <Link to="/portfolio">
                        Portfolio    
                    </Link>
                </p>
                <p>

                    <h5>Third Project Development</h5>
                    July 2020 - Present
                    <p>
                        <b>+</b> Contributed to and developed websites for clients.
                        <br />
                        <b>+</b>Code optimization
                        <br />
                        <b>+</b> Worked on dynamic and portable code
                        <br />
                        <b>+</b> Worked on both Back-End and Front-End development
                        <br />
                        <b>+</b> Worked with Databases and Authentication.
                    </p>

                    <h5>Once Upon an Adventure</h5>
                    July 2020
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
                    </p>

                    <h5>Self-Care Sidekick</h5>
                    June 2020
                    <p>
                        <b>+</b> Allows for account creation and login
                        <br />
                        <b>+</b> Makes use of databases to add, track, and complete activities
                        <br />
                        <b>+</b> Primarily worked on front-end design and working with api's to make digital pet images change dynamically with the user's progress.
                    </p>

                    <h5>Foodies & Movies</h5>
                    May 2020
                    <p>
                        <b>+</b> Uses a third-party API to gather recipe information
                        <br />
                        <b>+</b> Utilizes local storage to save food and drink recipes
                        <br />
                        <b>+</b> Picks a random movie using an API call to accompany your meal
                    </p>

                    <h5>Leather Worker/Tooler @ Burns Saddlery</h5>
                    Jun 2017 - Mar 2020, Richfield, UT
                    <p>
                        <b>+</b> Designed and carved leather for saddles and other leather goods. I worked primarily on the
                        creative side, carving different patterns into the leather.
                        <br />
                        <b>+</b> I arrived early every day to make sure everything was set up for myself and the other leather
                        workers for the day.
                    </p>

                    <h5>Barn Manager @ Pierce College Farm</h5>
                    Dec 2013 - Jun 2015, Woodland Hills, CA
                    <p>
                        <b>+</b> Studied weight, feed, and health records to determine food rations
                        <br />
                        <b>+</b> Developed and maintained improved practices in feeding, housing and sanitation to prevent
                        spreading of disease.
                        <br />
                        <b>+</b> Trained and supervised barn workers in animal care procedures, maintenance duties and safety
                        precautions.
                        <br />
                        <b>+</b> Utilized disinfectant solutions, brushes, shovels and water hoses to thoroughly clean stalls and
                        pens
                        <br />
                        <b>+</b> Monitored overall health and well-being of 18 horses, paying attention to signs of concern
                        <br />
                        <b>+</b> Preserved property by mowing, plowing and moving hay to proper storage locations
                        <br />
                        <b>+</b> Planned and executed fundraising approaches and group events to boost revenue and expand
                        facility outreach.
                        <br />
                        <b>+</b> Prepared food, cleaned enclosures and administered medications to treat acute and chronic
                        conditions.
                        <br />
                        <b>+</b> Taught employees how to work with animals and relate to members of public to garner interest
                        and support for operations.
                        <br />
                        <b>+</b> Devoted special emphasis to punctuality and worked to maintain outstanding attendance
                        record, consistently arriving to work ready to start immediately.
                    </p>
                </p>

            <h2>Education</h2>
                <p>
                    <h5>UCSD Extension</h5>
                    C, C++, and C# Certification, Computer Science. (Present)
                </p>

                <p>
                    <h5>UCLA Extension</h5>
                    Full-Stack Web Development Certification, Computer Science
                </p>

                <p>
                    <h5>Meredith Manor International Equetrian Center</h5>
                    Certificate of Leather Work & Riding Mastery, Equine Science
                </p>

                <p>
                    <h5>Los Angeles Pierce College</h5>
                    Associate of Science, Equine Science
                </p>
        </div>
      </div>
    );
}

export default Resume;