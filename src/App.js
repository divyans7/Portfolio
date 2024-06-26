import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" scroll>
            <Navigation>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Divyansh Chaudhary</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Header>
        <Drawer>
            <Navigation>
                <Link to="/" style={{textDecoration: 'none', color: 'inherit'}}>Divyansh Chaudhary</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/aboutMe">About Me</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
    </Layout>
</div>
  );
}

export default App;
