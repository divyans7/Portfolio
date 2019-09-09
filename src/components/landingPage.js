import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component {
    render () {
        return(
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://www.shareicon.net/data/512x512/2016/08/05/806962_user_512x512.png" 
                        alt="avatar"
                        className="avatar-img"
                        />

                        <div className="banner-text">
                            <h1>Front End Web Developer</h1>

                            <hr /> 
                            <p> HTML/CSS | Bootstrap | JavaScript | Ajax | Babel | React | Curl | Redux  </p>

                            <div className="social-links"> 

                            {/* LinkedIn */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-linkedin-square" aria-hidden="true" />
                                 </a>

                            {/* Gitbub */}
                            <a href="http://google.com" rel="noopener noreferrer" target="_blank">
                                <i className="fa fa-github-square" aria-hidden="true" />
                                 </a>

                            {/* Freevodecamp */}
                            <a href="http://0google.com" rel="noopener noreferrer" target="_blank">
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