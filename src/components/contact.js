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
                        src="https://scontent.fdel8-1.fna.fbcdn.net/v/t1.0-9/16602896_1571920622837072_4161117462931355705_n.jpg?_nc_cat=108&_nc_oc=AQlLcCiFX4vKACF8b06Bh3jGtBsmwQoJHKKKcP-EQDFy5Gs5r5QqRrfzaqGMyqyfdWo&_nc_ht=scontent.fdel8-1.fna&oh=320d2bfe9d0c44750fc3cd4fa16f2b64&oe=5E2EA832"
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