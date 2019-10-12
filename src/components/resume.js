 import React, { Component } from 'react';

 import CV from 'react-cv';
import { CVData } from './CVdata';


 class Resume extends Component {
     render () {
         return(
            <div>
             
             <CV {...CVData} />
            
            </div>
         );
     }
 }

 export default Resume; 