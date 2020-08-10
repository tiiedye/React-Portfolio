import React from "react";

const styles = {
    img: {
        marginTop: 30,
        borderRadius: 8,
        height: 300,
        width: 300
    }
}

function About() {
    return(
        <div className="container">
            <h1>About Me</h1>

                <div className="container row">
                    <div className="col-md-4">
                    <img src={require("../assets/ProfilePic.jpg")} alt="About Me" style={styles.img}></img>
                    </div>

                    <div className="col-md-8">
                    <p>
                        <b>Name:</b> Julia Clements
                        <br />
                        <b>Preferred Name:</b> Jace
                        <br />
                        <b>Pronouns:</b> They/Them
                        <br />
                        <b>Hobbies:</b> video games, horse-back riding, cooking
                    </p>
                    <p>
                        I'm originally from Los Angeles California, but have spent the last three years in Utah. 
                        I moved to Utah to pursue my passion for leatherworking, but now it's time for a change! 
                        I have always been a fan of problem solving, and although I still have a passion for carving, 
                        tooling, and leatherwork in general, I need something that is more of challenge.
                    </p>
                    <p>
                        I've always had an affinity towards technology, and taught myself how to build basic websites 
                        using HTML and CSS at the young age of twelve (thanks neopets!). It's something I remember I 
                        truly enjoyed doing at the time, and figured it is never to late to hop back into coding. I 
                        was right! It was easy to get the hang of HTML and CSS again, and I learned a whole lot more along 
                        the way. I have a strong understanding of HTML, CSS, JavaScript, Node, Frameworks such 
                        as Bootstrap, Libraries like jQuery and React, and databases such as MongoDB and MySQL. I'm also 
                        taking the time to expand my knowledge even further, and am currently working on learning C++, C#, 
                        and Typescript!
                    </p>
                    </div>
                </div>
        </div>
    )
}

export default About;