import React, { Component } from 'react';
import { Button, Tabs, Tab, Grid, Cell, Card, CardActions, CardMenu, IconButton, CardTitle, CardText } from 'react-mdl';

class Projects extends Component {
    constructor (props) {
        super (props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0 ) {
            return (
             <div className="projects-grid">
                 {/* Project 1*/}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px',  background:
                    'url(https://rationalappdev.com/wp-content/uploads/2016/12/Cover.93953ad376e749309a483c8b11b40106.jpg) center / cover'}}> Vanilla JS Project 1</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff', }}>
                        <IconButton name="share"/>
                    </CardMenu>

                 </Card>

                 {/* Project 2*/}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px',  background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpPi6JOx-P17L8bk3avMyelcTDbWAczcsSCGe2M5Lt2nlJwMynQ) center / cover'}}> Vanilla JS Project 2</CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff', }}>
                        <IconButton name="share"/>
                    </CardMenu>

                 </Card>

                 {/* Project 3*/}
                 <Card shadow={5} style={{minWidth:'450', margin:'auto'}}>
                    <CardTitle style={{color:'#fff', height:'176px',  background:
                    'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBpPi6JOx-P17L8bk3avMyelcTDbWAczcsSCGe2M5Lt2nlJwMynQ) center / cover'}}> Vanilla JS Project 3    </CardTitle>
                    <CardText>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
                    </CardText>
                    <CardActions border>
                        <Button colored> Github</Button>
                        <Button colored> CodePen</Button>
                        <Button colored> LiveDemo</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff', }}>
                        <IconButton name="share"/>
                    </CardMenu>

                 </Card>
             </div>
            );
        } else if(this.state.activeTab === 1 ) {
            return (
             <div>
                 <h1>This is React</h1>
             </div>
            )
        } else if(this.state.activeTab === 2 ) {
            return (
             <div>
                 <h1>This is Node</h1>
             </div>
            )
        } else if(this.state.activeTab === 3 ) {
            return (
             <div>
                 <h1>This is MongoDB </h1>
             </div>
            )
        }
    }

    render () {
        return(
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabID)=> this.setState({activeTab:tabID})} ripple> 
                <Tab>Vanilla JS</Tab>
                <Tab>React JS</Tab>
                <Tab>Node JS</Tab>
                <Tab>Mongo DB</Tab>
                </Tabs>
                <section >
                    <Grid>
                        <Cell col={12}>
                            <div className="content">
                             {this.toggleCategories()}
                            </div>
                        </Cell>
                    </Grid>
                </section>
            </div>
        );
    }
}

export default Projects; 