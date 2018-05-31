import React, {Component} from 'react';
import {Grid, Cell, List, ListItem, ListItemContent} from 'react-mdl';
class Contact extends Component{
    render(){
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Vishnu Thiruganasambandam</h2>
                        <img className="contact-avatar-image" style={{height:'300px'}} src="./images/contact-avatar.png" alt="contact-avatar"/>
                        <p>
                            Hello! I'm a Software Developer by passion and profession which led me to a Bachelors and Masters Degree in Computer Science. Looking for full-time opportunities so, please take a look at my resume. If you find it interesting contact me with any of the details provided here. Grateful for your time!
                        </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact</h2>
                        <hr />
                        <div className="contact-details">
                            <List>
                                <ListItem>
                                    <ListItemContent style={{textAlign: 'center', fontSize: '43px', fontFamily: 'Chewy'}}>
                                        <i className="fa fa-phone-square" aria-hidden="true" />
                                        (864) 624-7170
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{textAlign: 'center', fontSize: '43px', fontFamily: 'Chewy'}}>
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        vthirug@clemson.edu
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{textAlign: 'center', fontSize: '43px', fontFamily: 'Chewy'}}>
                                        <i className="fa fa-skype" aria-hidden="true" />
                                        vishnussj
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact;