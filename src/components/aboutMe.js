import React, { Component } from 'react';

import CV from 'react-cv';
import { CVData } from './CVdata';


class About  extends Component {
    render () {
        return(
            <div>
                <CV {...CVData} />
                
            </div>
        );
    }
}

export default About ; 