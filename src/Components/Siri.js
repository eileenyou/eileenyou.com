import React from "react";

import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { GiMagnifyingGlass } from "react-icons/gi";
import { IoIosBuild } from 'react-icons/io';
import { HiLightBulb, HiSpeakerphone } from 'react-icons/hi';

import Exploring from '../img/Health.png';
import Alert from '../img/Alert.png';
import Health from '../img/Health.png';

import "./ProjectsInfo.css";

const Siri = () => {
    return (
            <div className="projectInfo">
                <h4>Siri Around the World</h4>
                <div className="summary">
                    <p>I worked with designers and managers under Siri's Conversational Interaction (CI) team to code and create two prototypes for future 
                        cross-platform interactions that users could share with Siri. The premise of my project was completely open ended. The constraints 
                        were simply to create interactions using <strong>two wearable devices and Siri</strong>.
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
                <p className="headings">Background Research</p>
                    <p>Prior to beginning the internship, I read <i>Designing Voice User Interfaces: Principles of Conversational Experiences</i> by Cathy Pearl 
                    to understand proper methods and pitfalls in designing conversational experiences. I also watched video seminars on the purpose of Siri CI, and on
                    how Siri works from an engineering standpoint. I connected with everyone on the CI team (around 50 people), consisting of VUI designers, prototypers,
                    design producers, and UX writers. </p>

                <p className="headings">Insights</p>
                <div className="insights">
                    <p>Through my background research, I learned about the niches of conversational agents, and based my prototypes off of these insights:
                    </p>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>When Siri is paired with other devices, it has an amazing <strong>ability to interface with the world without occupying a user's sight</strong>. Freeing up vision 
                            can allow users to more deeply engage with people, places, and objects in real life instead of their phones  
                        </p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>When conversing with Siri, there are many crucial <strong>technical details</strong> that need to be considered, like whether to include a trigger phrase or how to perform endpoint detection  
                        </p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Siri itself utilizes the web, data, and human written responses. However, if it's paired with other devices then <strong>more data can be utilized to provide
                            an interaction</strong>. For example, devices that contain an accelerometer, gyroscope, and compass, can give information about head position and orientation.</p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Due to the nature of conversation (its intangibility), interactions with Siri must be <strong>structured</strong> enough that the user can respond
                            with ease but <strong>natural</strong> enough that the interaction doesn't seem contrived</p>
                    </div>
                </div>

                <p className="headings">Mind Mapping and Storyboarding</p>
                <p>From these initial insights, I started organizing all my initial ideas on a Kanban board by interaction style and purpose. For example, 'Spatial Audio'
                    would define a realm of ideas where Siri employs sound in space to help the user perform different tasks like 
                    <ul>
                        <li>directing attention to signs in an airport, </li>
                        <li>giving directions while driving,</li>
                        <li>or highlighting points of interest in tourism or exploring.</li>
                    </ul>
                    Another example was 'Lifestyle', which defines ideas like 
                    <ul>
                        <li>allowing Siri to communicate with a healthcare provider and monitor important numbers like cholesterol, blood pressure, or bmi,</li>
                        <li>shifting across devices inside the house to perform tasks like waking the kids up or reminding the user about forgotten items on their way out,</li>
                        <li>or even becoming an athletic trainer in the user's ear.</li>
                    </ul>
                    There were several other categories, all of which I attempted to cover a breadth of ideas before diving into a select few.
                    <br></br><br></br>
                    After consulting with designers and receiving feedback, I took three ideas and created <strong>storyboards</strong> of scenarios that highlighted the use case to pitch to my team. My team was mainly software engineers, and they were figuring out how to 
                    communicate in a visual manner that clearly showed the intentions of an idea. The storyboards were an easy way to do so.
                </p>
                <p>#1</p>
                <img src={Exploring} alt="Siri helping user explore"/>
                <p>#2</p>
                <img src={Alert} alt="Siri alerting user in car"/>
                <p>#3</p>
                <img src={Health} alt="Siri monitoring health of user"/>

                <p className="headings">Solution</p>
                    <p>
                    After <strong>extensive feedback</strong>, I narrowed my focus to two ideas:
                    <ol>
                        <li>How might Siri bridge the language and cultural gap between people when communicating in different languages without a screen</li>
                        <li>How might Siri improve the experience of exploring and deepen the historical and cultural appreciation of a new place without a screen</li>
                    </ol>
                    These two ideas naturally appealed to me because they have the potential to place users back into the material world while still offering the benefits
                    of technology. Furthermore, they have a profound ability to affect the <strong>relationships people have with each other and the world</strong> , and not simply people to screen interactions. 
                    <br></br><br></br>
                    I began to build a web app in Swift and JavaScript that allowed me to simulate the user talking with Siri in any part of the world, in any language, using the Google Maps SDK, Text-to-Speech, and Automatic Speech Recognition tools. 
                    These prototypes were not Siri-centered interactions, but rather human interactions that Siri helped to facilitate or aid as an assistant. 
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