import React from "react";
import "./Projects.css";
import {IoIosArrowRoundBack, IoIosArrowRoundForward} from 'react-icons/io';
import { Paper } from '@material-ui/core';

const Projects = () => {
    return (
        <div class="project-container"> 
            <IoIosArrowRoundBack className="center" size={50}/>
            <div>
                <Paper elevation={3} />
            </div>
            <IoIosArrowRoundForward className="center" size={50}/>
        </div>
    );
  };
  
  export default Projects;