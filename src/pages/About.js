import React from "react";

const styles = {
    img: {
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
                        Hello! my name is Julia Clements, but feel free to call me Jace. I'm
                        non-binary and prefer They/Them pronouns.
                    </p>
                    <p>
                        I'm originally from Los Angeles California but I am currently living
                        in central Utah. I moved to Utah to pursue my passion for
                        leatherworking, and have been living here for three years now. I'm
                        more on the artistic side of leatherworking, where I carve designs
                        into saddles, belts, holsters, and all manner of other things.
                        However, I'm ready for a change.
                    </p>
                    <p>
                        My goal is to move back to California so I can be closer to friends
                        and family, and I'm also interested in pursuing work that is more of
                        a challenge.
                    </p>
                    <p>
                        I love puzzles and thinking through problems, and I've always had a
                        love for technology and coding. I taught myself a little bit of HTML
                        and CSS at the age of twelve, and am eager to get back into it and
                        to learn even more! My hobbies include horse-back riding and video
                        games. I love to cook and try new things, and I love to travel as
                        well!
                    </p>
                    </div>
                </div>
        </div>
    )
}

export default About;