import React from 'react';

import "./Footer.css";
import {Tooltip} from '@material-ui/core';
import { FiCode, FiGithub, FiMail, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
    return (
        <div className="footer">
            <div className="social">
                <Tooltip title="Website Source Code" placement="top" arrow>
                    <a href="https://github.com/eileenyou/eileenyou.com">
                        <FiCode size={17}/>
                    </a>
                </Tooltip>
                
                <Tooltip title="GitHub" placement="top" arrow>
                    <a href="https://github.com/eileenyou">
                        <FiGithub size={17}/>
                    </a>
                </Tooltip>

                <Tooltip title="Email" placement="top" arrow>
                    <a href="mailto:aiyou98@gmail.com" target="_blank" rel="noreferrer">
                        <FiMail size={17}/>
                    </a>
                </Tooltip>

                <Tooltip title="LinkedIn" placement="top" arrow>
                    <a href="https://www.linkedin.com/in/eileen-you/" target="_blank" rel="noreferrer">
                        <FiLinkedin size={17}/>
                    </a>
                </Tooltip>
            </div>
            <p>All work and website © Eileen You 2020</p>
        </div>
    );
}

export default Footer;