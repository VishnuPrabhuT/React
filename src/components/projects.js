import React, { Component } from "react";
import {
    Tabs,
    Tab,
    Grid,
    Cell,
    Card,
    CardTitle,
    CardActions,
    CardMenu,
    Button,
    IconButton,
} from "react-mdl";
import { CardText } from "react-mdl/lib/Card";

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
        };
    }

    toggleTabs(activeTab) {
        var tabContent = [
            <div className="projects-grid">
                {/* TAB 1 */}
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/unity-card.jpg) center / cover",
                        }}
                    >
                        Unity Game Engine
                    </CardTitle>
                    <CardText>
                        Successfully developed a 3D game in Unity game engine
                        with scripts coded in C#.
                    </CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT/RC-Game"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT/RC-Game/archive/master.zip"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://people.cs.clemson.edu/~vmhatre/Final/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/C++-logo.png) center / cover",
                        }}
                    >
                        2D Game with SDL and C++
                    </CardTitle>
                    <CardText>
                        Learned SDL 2.0 libraries in C++ with robust design
                        patterns to create a 2D game in Linux.
                    </CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT/2D-Game-Engine"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT/2D-Game-Engine/archive/master.zip"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://drive.google.com/open?id=1bxtH5-jAlwhfprvb5Qkh3G-7Jsefi6x3"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>,
            <div className="projects-grid">
                {/* TAB 2 */}
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/react-logo.png) center / cover",
                        }}
                    >
                        React Portfolio Project
                    </CardTitle>
                    <CardText>
                        Made a Portfolio from scratch using React and React mdl
                        for UI.
                    </CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT/React"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT/React/archive/master.zip"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://vishnuprabhut.github.io/React/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/react-logo.png) center / cover",
                        }}
                    >
                        React Portfolio Project
                    </CardTitle>
                    <CardText>React Project</CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT/duit"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT/duit"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://duitapp.herokuapp.com/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/react-logo.png) center / cover",
                        }}
                    >
                        React Portfolio Project
                    </CardTitle>
                    <CardText>Pet Adoption Site</CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://m1assignment.netlify.app/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/react-logo.png) center / cover",
                        }}
                    >
                        React Portfolio Project
                    </CardTitle>
                    <CardText>
                        Made a Portfolio from scratch using React and React mdl
                        for UI.
                    </CardText>
                    <CardActions border>
                        <a
                            href="https://github.com/VishnuPrabhuT/React"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Github</Button>
                        </a>
                        <a
                            href="https://github.com/VishnuPrabhuT/React/archive/master.zip"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Download</Button>
                        </a>
                        <a
                            href="https://vishnuprabhut.github.io/React/"
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button colored>Live Demo</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>,
            <div className="projects-grid">
                {/* TAB 3 */}
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/vs-logo.png) center / cover",
                        }}
                    >
                        AADT Windows Application
                    </CardTitle>
                    <CardText>
                        Developed robust Windows Application for data analysis
                        using SVM libraries for the Department of Transportation
                        (SC) and produces excel output files.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                        <Button colored>Download</Button>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>,
            <div className="projects-grid">
                {/* TAB 4 */}
                <Card shadow={5} style={{ minWidth: "460", margin: "auto" }}>
                    <CardTitle
                        style={{
                            color: "#fff",
                            height: "176px",
                            background:
                                "url(/React/images/RStudio-card.jpg) center / cover",
                        }}
                    >
                        Yelp Data Analysis
                    </CardTitle>
                    <CardText>
                        Performed Data Analysis on Yelp dataset using EDA and
                        supervised learning in RStudio.
                    </CardText>
                    <CardActions style={{ textAlign: "center" }} border>
                        <a
                            href="https://github.com/VishnuPrabhuT/graduateStudy/raw/master/Yelp%20Poster.png"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button colored>View Poster</Button>
                        </a>
                    </CardActions>
                    <CardMenu style={{ color: "#fff" }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>,
        ];
        return tabContent[activeTab];
    }

    render() {
        return (
            <div className="projects-tabs">
                <Tabs
                    activeTab={this.state.activeTab}
                    onChange={(tabId) => this.setState({ activeTab: tabId })}
                    ripple
                >
                    <Tab>Game Development</Tab>
                    <Tab>Web Development</Tab>
                    <Tab>Windows Application Development</Tab>
                    <Tab>Data Analysis</Tab>
                </Tabs>
                <section>
                    <div className="projects-grid">
                        <Grid>
                            <Cell col={12}></Cell>
                        </Grid>
                        {this.toggleTabs(this.state.activeTab)}
                    </div>
                </section>
            </div>
        );
    }
}

export default Projects;
