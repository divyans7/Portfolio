import React, { Component } from 'react';
import { Grid, Cell, List, ListItemContent, ListItem } from 'react-mdl';

class Contact extends Component {
    render () {
        return(
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2> Divyansh Chaudhary </h2>
                        <img 
                        src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height:'250px'}}

                        />
                        <p style={{width:'75%', margin:'auto', paddingTop:'1em', paddingBottom:'1em'}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.  diam erat dignissim est, a sollicitudin urna enim rutrum metus. Mauris porttitor risus lorem, quis luctus erat finibus ut. Nullam finibus mollis vulputate. Aliquam erat volutpat. Morbi malesuada pretium condimentum. Etiam neque ante, consequat vel nulla eu, placerat tristique justo. Nulla id varius risus.

                        </p>


                    </Cell>

                    <Cell col={6}>
                        <h2> Contact Me </h2>
                        <hr/>

                        <div className="contact-list"> 
                           <List>
                             <ListItem>
                               <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                               <i className="fa fa-phone-square" aria-hidden="true"/>
                               +91-7382971692</ListItemContent>
                             </ListItem>
                             
                             <ListItem>
                               <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                               <i className="fa fa-fax" aria-hidden="true"/>
                               +91-7382971692</ListItemContent>
                             </ListItem>

                             <ListItem>
                               <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                               <i className="fa fa-envelope" aria-hidden="true"/>
                                divi.v@outlook.com </ListItemContent>
                             </ListItem>

                             <ListItem>
                               <ListItemContent style={{fontSize:'25px', fontFamily: 'Anton'}}>
                               <i className="fa fa-skype" aria-hidden="true"/>
                               @divi.v</ListItemContent>
                             </ListItem>
                           </List>
                        
                        </div>
                        

                        
                    </Cell>

                </Grid>

            </div>
        );
    }
}

export default Contact; 