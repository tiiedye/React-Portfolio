import React from "react";
import "./StickyNav.css";

function StickyNav() {
    return(
        <div className="stickyContainer">
            {/* only shows on larger screens */}
            <div className="card">
                <div className="card-body">
                    <h6 className="card-subtitle mb-2 text-muted">Quick Nav</h6>
                    <a href="#Projects">Projects</a>
                    <br />
                    <a href="#WebApps">Web Apps</a>
                    <br />
                    <a href="#CLIApps">CLI Apps</a>
                </div>
            </div>
        </div>
    )
}

export default StickyNav;