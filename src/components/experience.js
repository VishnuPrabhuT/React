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
            <p>{this.props.jobDescription}</p>
        </Cell>
        <Cell col={8}>
          <h5 className="company-names">Cognizant Technology Solutions</h5>
          <p style={{textAlign: 'center', fontWeight: 'Bold'}}>{this.props.startYear} - {this.props.endYear}</p>
        </Cell>        
      </Grid>
      <Grid>
        <Cell col={4}>
        </Cell>
        <Cell col={8}>
            <List>
                <ListItem>
                    Built dynamic web pages using MVC framework, jQuery and JavaScript for Ace Hardware.
                </ListItem>
                <ListItem>
                    Deployed RESTful Web services for Ace Hardware to help with stock ordering on vendor sites.
                </ListItem>
                <ListItem>
                    Created jQuery client-side scripts for autocomplete, capturing custom keyboard events, validation, date
                    format and sorting using algorithms that retain order after grouping.
                </ListItem>
                <ListItem>
                    Implemented asynchronous calls using AngularJS for posting data to back-end in large grid views.
                </ListItem>
                <ListItem>
                    Designed and built secure RESTful API in ASP.NET Core for Ace Hardware’s rewards program from scratch.
                </ListItem>
            </List>
        </Cell>
      </Grid>
      </div>
    )
  }
}

export default Experience;