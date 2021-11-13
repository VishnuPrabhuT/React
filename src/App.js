import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div id="filler">
                <div
                    style={{
                        height: "-webkit-fill-available",
                    }}
                >
                    <Layout fixedHeader>
                        <Header
                            className="header-grid"
                            title={
                                <span>
                                    <span style={{ color: "/ddd" }}>
                                        Vishnu Prabhu{" "}
                                    </span>
                                    <strong>Thirugnanasambandam</strong>
                                </span>
                            }
                        >
                            <Navigation>
                                <Link to="/">
                                    <i
                                        className="fa fa-home"
                                        aria-hidden="true"
                                    />
                                </Link>
                                <Link to="/resume">Resume</Link>
                                {/* <Link to="/aboutme">About Me</Link> */}
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Header>
                        <Drawer className="drawer-menu" title="Menu">
                            <Navigation>
                                <Link to="/">Home</Link>
                                <Link to="/resume">Resume</Link>
                                <Link to="/aboutme">About Me</Link>
                                <Link to="/projects">Projects</Link>
                                <Link to="/contact">Contact</Link>
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content">
                                <Main />
                            </div>
                        </Content>
                    </Layout>
                </div>
            </div>
        );
    }
}

export default App;
