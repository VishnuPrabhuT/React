import React, {Component} from 'react';
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton} from 'react-mdl';
import { CardText } from 'react-mdl/lib/Card';

class Projects extends Component{
    constructor(props){
        super(props)
        this.state = {
            activeTab : 0
        }
    }
     
    toggleTabs(activeTab){
        var tabContent = [<div className="projects-grid">
                            {/* TAB 1 */}
                            <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/unity-card.jpg) center / cover'}}>Unity Game Engine</CardTitle>
                            <CardText>Successfully developed a 3D game in Unity game engine with scripts coded in C#.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Download</Button>
                                <a href="https://people.cs.clemson.edu/~vmhatre/Final/" rel="noopener noreferrer" target="_blank"><Button colored>Live Demo</Button></a>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                          </Card> 
                          <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                            <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/C++-logo.png) center / cover'}}>2D Game with SDL and C++</CardTitle>
                            <CardText>Learned SDL 2.0 libraries in C++ with robust design patterns to create a 2D game in Linux.</CardText>
                            <CardActions border>
                                <Button colored>Github</Button>
                                <Button colored>Download</Button>
                                <Button colored>Live Demo</Button>
                            </CardActions>
                            <CardMenu style={{color: '#fff'}}>
                                <IconButton name='share' />
                            </CardMenu>
                          </Card>
                          </div>, 
                          <div className="projects-grid">
                          {/* TAB 2 */}
                          <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/react-logo.png) center / cover'}}>React Portfolio Project</CardTitle>
                          <CardText>Made a Portfolio from scratch using React and React mdl for UI.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card> 
                        <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/C++-logo.png) center / cover'}}>2D Game with SDL and C++</CardTitle>
                          <CardText>Learned SDL 2.0 libraries in C++ with robust design patterns to create a 2D game in Linux.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card>
                        </div>, 
                          <div className="projects-grid">
                          {/* TAB 3 */}
                          <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/unity-card.jpg) center / cover'}}>Unity Game Engine</CardTitle>
                          <CardText>Successfully developed a 3D game in Unity game engine with scripts coded in C#.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card> 
                        <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/C++-logo.png) center / cover'}}>2D Game with SDL and C++</CardTitle>
                          <CardText>Learned SDL 2.0 libraries in C++ with robust design patterns to create a 2D game in Linux.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card>
                        </div>, 
                          <div className="projects-grid">
                          {/* TAB 4 */}
                          <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/unity-card.jpg) center / cover'}}>Unity Game Engine</CardTitle>
                          <CardText>Successfully developed a 3D game in Unity game engine with scripts coded in C#.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card> 
                        <Card shadow={5} style={{minWidth: '460', margin: 'auto'}}>
                          <CardTitle style={{color: '#fff', height: '176px', background: 'url(./images/C++-logo.png) center / cover'}}>2D Game with SDL and C++</CardTitle>
                          <CardText>Learned SDL 2.0 libraries in C++ with robust design patterns to create a 2D game in Linux.</CardText>
                          <CardActions border>
                              <Button colored>Github</Button>
                              <Button colored>Download</Button>
                              <Button colored>Live Demo</Button>
                          </CardActions>
                          <CardMenu style={{color: '#fff'}}>
                              <IconButton name='share' />
                          </CardMenu>
                        </Card>
                        </div>]
        return(tabContent[activeTab])
    }

    render(){
        return(
            <div className="projects-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({activeTab : tabId})} ripple>
                    <Tab>Game Development</Tab>
                    <Tab>Web Development</Tab>
                    <Tab>Windows Application Development</Tab>
                    <Tab>Data Analysis</Tab>
                </Tabs>
                <section>
                    <div className="projects-grid">
                        <Grid>
                            <Cell col={12}>

                            </Cell>
                        </Grid>
                        {this.toggleTabs(this.state.activeTab)}
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects;