import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';


class Resume extends Component {
  render() {
    return(
      <div className="resume-grid">
        <Grid>
          <Cell className="resume-left-col" col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src="./images/resume-avatar.png"
                alt="resume-avatar"
                style={{paddingTop: '', height: '270px', borderRadius: '27%'}}
                 />
            </div>

            <h2>Vishnu</h2>
            <h4 style={{color: 'grey'}}>Software Engineer</h4>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <p style={{textAlign:'justify'}}>
                Hello! I'm a Software Developer by passion and profession which led me to a Bachelors and Masters Degree in Computer Science. Looking for full-time opportunities so, please take a look at my resume. If you find it interesting contact me with any of the details provided here. Grateful for your time!
            </p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
            <h5>Address</h5>
            <p>406 Old Central Rd</p>
            <h5>Phone</h5>
            <p>(864) 624-7170</p>
            <h5>Email</h5>
            <p>vthirug@clemson.edu</p>
            <h5>Web</h5>
            <p><a href="https://vishnuprabhut.github.io/React">https://vishnuprabhut.github.io/React</a></p>
            <h5>Github</h5>
            <p><a href="https://github.com/VishnuPrabhuT">https://goo.gl/3f5fFf</a></p>
            <h5>LinkedIn</h5>
            <p><a href="https://www.linkedin.com/in/vishnu-prabhu-thirugnanasambandam-11a54a71/">https://goo.gl/fauc8m</a></p>
            <hr style={{borderTop: '3px solid #833fb2', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education
              startYear={2010}
              endYear={2014}
              schoolName="Anna University"
              schoolDescription="Bachelor of Science in Computer Science and Engineering"
               />
               <Education
                 startYear={2016}
                 endYear={2018}
                 schoolName="Clemson University"
                 schoolDescription="Master of Science in Computer Science"
                  />
                <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Experience</h2>
            <Experience
              startYear={2014}
              endYear={2016}
              jobName="Software Engineer"
              jobDescription=""
              />
              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="C#"
                progress={90}
                />
                <Skills
                skill="Python"
                progress={80}
                />
                <Skills
                skill="ASP.NET Core"
                progress={80}
                />
                <Skills
                skill="HTML/CSS"
                progress={90}
                />
                <Skills
                skill="React"
                progress={80}
                />
                <Skills
                skill="javascript"
                progress={80}
                />
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Resume;