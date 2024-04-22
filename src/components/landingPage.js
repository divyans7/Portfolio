import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media.licdn.com/dms/image/C5603AQEGoGfkLPTDJg/profile-displayphoto-shrink_400_400/0/1641464381846?e=1719446400&v=beta&t=hC2sMqR2KItgp2jDGOtBFgOioupRnsH-EAQiq5-wSuA" 
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Product Innovation Engineer</h1>

                            <hr /> 
                            <p> CSPO | AGILE/SCRUM | JavaScript | Ajax | Salesforce | Babel | React | Curl | Redux  </p>

                            <div className="social-links"> 

                            {/* LinkedIn */}
                            <a href="https://www.linkedin.com/in/divyansh-chaudhary-887744119/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                 </a>

                            {/* Gitbub */}
                            <a href="https://github.com/divyans7/" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                 </a>

                            {/* Freevodecamp */}
                            <a href="https://www.freecodecamp.org/fccfe7d653c-f44a-4a8e-a738-a4445ba5bfca" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-free-code-camp" aria-hidden="true" />
                                 </a>

                            {/* Facebook */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-facebook-square" aria-hidden="true" />
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