import React, {Component} from 'react';

class Resume extends Component{
    render(){
        return(
            <div style={{backgroundColor: 'grey', height:'100%'}}>
                <embed src={require("../Vishnu.pdf")} width="100%" height="1200px" />
            </div>
        )
    }
}

export default Resume;