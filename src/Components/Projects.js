import React from "react";
import Showscape from "./Showscape";
import Siri from "./Siri";
import Atlantis from './AtlantisHub';
import Artwork from './Artwork';
import PR from './PR';

import Apple from '../img/Apple.png';
//import AR from '../img/AR.png';
import AtlantisHub from '../img/Dusk.png';
import ShowscapeMain from '../img/ShowscapeMain.png';
import Moon from '../img/Moon.jpg';
import MembershipCard from '../img/MembershipCard_v2.jpg';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { Button } from "@material-ui/core";

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-force-tabpanel-${index}`}
        aria-labelledby={`scrollable-force-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      width: "85%",
      margin: "1% 8%",
    },
    tabs: {
      marginLeft: "8%",
    },  
    tab: {
        backgroundColor: 'rgb(249, 251, 255)',
        fontFamily: 'lato, sans-serif',
        textTransform: 'none',
        padding: '10px 20px',
        '&:hover': {
            backgroundColor: 'none'
        }
        
    },
    content: {
        display: 'flex',
        flexDirection: 'column',
        '& > img': {
            width: '150px',
            height: '80px',
        }
    },
  }));

const Projects = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        className={classes.tabs}
        variant="scrollable"
        scrollButtons="on"
        value={value}
        onChange={handleChange}
      >
        <Tab {...a11yProps(0)} 
            component={()=> <Button onClick={()=> setValue(0)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={Apple} alt="Apple Logo"/>
                                <p>siri</p>
                            </div>
                            </Button>}
        />
        {/*
        <Tab label="Item Two" {...a11yProps(1)} 
            component={()=> <Button onClick={()=> setValue(1)} className={classes.tab}>
                            <div className={classes.content}>
                                <img src={AR}/>
                                <p>ar / vr</p>
                            </div>
                            </Button>}
        />
        <Tab label="Item Three" {...a11yProps(2)} 
            component={()=> <Button onClick={()=> setValue(2)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={AtlantisHub}/>
                                <p>daily renders</p>
                            </div>
                            </Button>}
        />
        */}
        <Tab label="Item Four" {...a11yProps(1)} 
            component={()=> <Button onClick={()=> setValue(1)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={ShowscapeMain}  alt="Showscape Logo"/>
                                <p>showscape</p>
                            </div>
                            </Button>}
        />
        <Tab label="Item Five" {...a11yProps(2)} 
            component={()=> <Button onClick={()=> setValue(2)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={AtlantisHub}  alt="Atlantis Logo"/>
                                <p>atlantis hub</p>
                            </div>
                            </Button>}
        />
        <Tab label="Item Six" {...a11yProps(3)} 
            component={()=> <Button onClick={()=> setValue(3)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={Moon}  alt="Artwork Logo"/>
                                <p>artwork</p>
                            </div>
                            </Button>}
        />
        <Tab label="Item Seven" {...a11yProps(4)}
            component={()=> <Button onClick={()=> setValue(4)} className={classes.tab} >
                            <div className={classes.content}>
                                <img src={MembershipCard}  alt="CMBDC Logo"/>
                                <p>public relations</p>
                            </div>
                            </Button>}
        />
      </Tabs>
      <TabPanel value={value} index={0} children={Siri}/>
      {/*
      <TabPanel value={value} index={1} >
        <div className="projectInfo"> 
            <p>1</p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2} >
        <div className="projectInfo"> 
            <p>2</p>
        </div>
      </TabPanel>
      */}
      <TabPanel value={value} index={1} children={Showscape}/>
      <TabPanel value={value} index={2} children={Atlantis}>
      </TabPanel>
      <TabPanel value={value} index={3} children={Artwork}>
      </TabPanel>
      <TabPanel value={value} index={4} children={PR}>
      </TabPanel>
    </div>
  );
}
  
  export default Projects;