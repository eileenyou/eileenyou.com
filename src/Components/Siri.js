import React from "react";

import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoIosBuild } from 'react-icons/io';
import { HiLightBulb, HiSpeakerphone } from 'react-icons/hi';


import "./ProjectsInfo.css";

const Siri = () => {
    return (
            <div className="projectInfo">
                <h4>Siri Around the World</h4>
                <div className="summary">
                    <p>I worked with designers and managers under Siri's Conversational Interaction (CI) team to code and create two prototypes for future 
                        cross-platform interactions that users could share with Siri. The premise of my project was completely open ended. The constraints 
                        were simply to create interactions using two devices and Siri.
                        <br></br><br></br>
                        Due to the NDA, I cannot specifically delve into the details of the project. However, I'd like to give insight into my approach and
                        thought process. 
                    </p>
                <p className="headings">Problem</p>
                    <p> As a result of the open ended nature of this project, there were some immediate questions and requirements I had for my vision of 
                        these interactions: 
                        <ul>
                            <li>How could these two devices work in unison to create a novel experience?</li>
                            <li>What senses are utilized in this interaction? What information is made available by these devices?</li>
                            <li>How would adding Siri to these two devices transform the method of communicating with Siri?</li>
                            <li>What is the purpose of Siri? Of the two devices? How could they overlap?</li>
                            <li>What are the constraints that these devices and Siri put on this project? What cannot be achieved?</li>
                        </ul>
                    </p>
                <p className="headings">Methods</p>
                <div className="methods">
                    <div className="methods-icon"> 
                        <GiMagnifyingGlass size={50}/>
                        <p>Background Research</p>
                    </div>
                    <div className="methods-icon">
                        <FaProjectDiagram size={50}/>
                        <p>Mind Mapping</p>
                    </div>
                    <div className="methods-icon">
                        <BsFillGrid3X2GapFill size={50}/>
                        <p>Storyboarding</p>
                    </div>
                    <div className="methods-icon">
                        <IoIosBuild size={50}/>
                        <p>Prototyping</p>
                    </div>
                    <div className="methods-icon">
                        <HiSpeakerphone size={50}/>
                        <p>Pitching</p>
                    </div>
                </div>
                <p className="headings">Insights</p>
                <div className="insights">
                    <p>Through reading extra material and meeting up with everyone on the CI team (around 50 people), I learned about the niches of conversational agents,
                        and based my prototypes off of these insights:
                    </p>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>When conversing with Siri, there are many minor <strong>technical details</strong> that need to be considered, like whether to include a trigger phrase or how to perform endpoint detection  
                        </p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Siri itself utilizes the web, data, and human written responses. However, if it's paired with other devices then <strong>more data can be utilized to provide
                            an interaction</strong>. For example, devices that contain an accelerometer, gyroscope, and compass, can give information about head position and orientation.</p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Due to the nature of conversation (its intangibility), it's integral to design interactions with Siri to be <strong>structured</strong> enough that the user can respond
                            with ease but <strong>natural</strong> enough that the interaction doesn't seem contrived</p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>When Siri is paired with other devices, it has an amazing <strong>ability to interface with the world without occupying a user's sight</strong>. Freeing up vision 
                            can allow users to more deeply engage with people, places, and objects in real life instead of their phones  
                        </p>
                    </div>
                </div>
                <p className="headings">Solution</p>
                    <p>With these insights, I came up with several scenarios to pitch to my team in the form of <strong>storyboards</strong>. My team was mainly software engineers, and they were figuring out how to 
                    communicate in a visual manner that clearly showed the intentions of an idea. The storyboards were an easy way to do so.
                    <br></br><br></br>
                    After <strong>extensive feedback</strong>, I began to build an app in Swift and JavaScript that allowed me to create two prototypes. These prototypes were not Siri-centered interactions,
                    but rather human interactions that Siri helped to facilitate or aid as an assistant. 
                    <br></br><br></br>
                    I continued to consult with the designers, who were intimately familiar with the features and capabilities of the specific devices I was working on, and my manager who provided 
                    guidance on coding and big picture usage. 
                    </p>
                <p></p>
                <p className="headings">Next Steps</p>
                <p>At the end of the summer, I <strong>pitched my project to the Senior Director of Siri Experience </strong>and the teams responsible for the devices
                    and certain functionalities. <strong>They have begun exploring ways to implement my prototypes </strong>and I'm excited to see where it will go. 
                    <br></br><br></br>
                    My overall experience at Apple has transformed my understanding of professional culture. I had a wonderful team that provided amazing
                    feedback and support, and really allowed me to contribute my own perspective to the work I did. I not only learned new coding languages,
                    how to create prototypes, and how to be a better designer, but I also discovered the value of a company that has a strong value-based 
                    and people-oriented culture.
                </p>
            </div>
        </div>
    );
  };
  
  export default Siri;