import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
class LandingPage extends Component {
    render() {
        return (
            <div>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        {/* <img
                            className="avatar-img"
                            src="/React/images/snap-avatar.png"
                            alt="avatar"
                        /> */}
                        <div className="logo">
                            <video
                                autoPlay
                                loop
                                width="500px"
                                height="250px"
                                src="/React/images/my-logo.mp4"
                                type="video/mp4"
                            ></video>
                        </div>
                        <div id="banner" className="banner-text">
                            <h1>Software Engineer</h1>
                            <hr />

                            <p>
                                {" "}
                                C# | Python | JavaScript | React | ASP.NET Core
                                | MS SQL | jQuery{" "}
                            </p>
                            <div className="social-links">
                                <a
                                    href="https://www.linkedin.com/in/vishnu-prabhu-thirugnanasambandam-11a54a71/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fab fa-linkedin"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a
                                    href="https://github.com/VishnuPrabhuT"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fab fa-github"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a
                                    href="https://www.facebook.com/Vishnussj2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <i
                                        className="fab fa-facebook"
                                        aria-hidden="true"
                                    ></i>
                                </a>
                                <a
                                    href="https://leetcode.com/vishnuprabhut/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img
                                        id="leetcode-icon"
                                        src=".\images\leetcode-icon.jpg"
                                        alt="leetcode-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;
