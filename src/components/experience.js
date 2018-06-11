import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import { List, ListItem } from 'react-mdl/lib/List';

class Experience extends Component {
  render() {
    return(
    <div className="experience-grid">
      <Grid>
        <Cell col={4}>
            <h4 style={{marginTop:'0px'}}>{this.props.jobName}</h4>
        </Cell>
        <Cell col={8}>
          <h5 className="company-names">Cognizant Technology Solutions</h5>
          <p style={{textAlign: 'center', fontWeight: 'Bold'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>        
      
        <Cell style={{lineHeight: '1.5em'}} col={12}>
            <List style={{justifyText: 'justify', width: '100%'}}>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Built dynamic web pages using MVC framework, jQuery and JavaScript with Agile workflow methodologies.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Deployed RESTful Web APIs for Ace Hardware to help with ordering on vendor sites with several HTTP verbs.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Created client-side scripts using JS for autocomplete, custom keyboard events, format checking.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Implemented asynchronous API calls in JavaScript to get/post data from the back-end and populate the UI.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Acquired knowledge about advanced concept like currying, closures and DOM manipulation using JavaScript.
                </ListItem>
            </List>
        </Cell>
        <hr style={{margin: 'auto', width: '90%', borderTop: '7px dotted #e22947'}} />
      </Grid>
      <Grid>
        <Cell style={{padding:'2%'}} col={5}>
            <h4 style={{marginTop:'0px'}}>Graduate Research Assistant</h4>
        </Cell>
        <Cell col={7}>
          <h5 className="company-names">Clemson University</h5>
          <p style={{textAlign: 'center', fontWeight: 'Bold'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>        
      
        <Cell col={12}>
            <List style={{justifyText: 'justify', width: '100%'}}>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Developed robust Windows Application that validates and formats data files for data analysis using SVM
                    libraries and produces predictions.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Visualized real-time speed profiles of autonomous vehicles using D3.js and ReactJS to show dynamic UI.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Worked on AWS to host a dynamic website with Apache Kafka to visualize streamed JSON data.
                </ListItem>
            </List>
        </Cell>
        <hr style={{margin: 'auto', width: '90%', borderTop: '7px dotted #e22947'}} />
      </Grid>
      <Grid>
        <Cell style={{padding:'2%'}} col={4}>
            <h4 style={{marginTop:'0px'}}>Front-End Engineer</h4>
        </Cell>
        <Cell col={8}>
          <h5 className="company-names">RESA - Clemson University</h5>
          <p style={{textAlign: 'center', fontWeight: 'Bold'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>        
        <Cell col={12}>
            <List style={{justifyText: 'justify', width: '100%'}}>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Sharpened Django skills to create webpages from wireframes provided for company’s portfolio site.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Used to React to build dynamic UI elements to highlight projects listed on page based on certain constraints.
                </ListItem>
                <ListItem>
                    <i className="fas fa-terminal" style={{color: 'white' ,paddingRight: '27px'}}/>
                    Built a web spider to retrieve links on the funding webpage and extract certain HTML nodes for data.
                </ListItem>
            </List>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Experience;