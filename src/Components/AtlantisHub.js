import React from "react";

import { FaProjectDiagram } from 'react-icons/fa';
import { BsFillGrid3X2GapFill } from 'react-icons/bs';
import { IoIosBuild } from 'react-icons/io';
import { HiLightBulb } from 'react-icons/hi';

import Day from '../img/Day.png';
import Dusk from '../img/Dusk.png';
import Night from '../img/Night.png';

import Sketch3 from '../img/IMG_1540.jpg';
import Sketch4 from '../img/IMG_1544.jpg';
import Sketch5 from '../img/IMG_1545.jpg';
import Sketch6 from '../img/IMG_1547.jpg';
import Sketch7 from '../img/IMG_1548.jpg';
import "./ProjectsInfo.css";

const Atlantis = () => {
    return (
            <div className="projectInfo">
                <h4>Atlantis Hub</h4>
                <img src={Day} alt="Atlantis Hub Day View"/>
                <div className="summary">
                    <p className="headings">Project Brief</p>
                     
                    <p>Large scale data displays in transportation hubs often need to <strong>cater towards the unique needs of different 
                        travelers without being cluttered and uninformative</strong>. The primary goal of this project is to design an engaging 
                        data-driven display that presents information in a clear, visually appealing manner in order to alleviate the 
                        burden for travelers. 
                        <br></br><br></br>
                        Atlantis Hub is located in the San Juan Islands on the main island of San Juan. The display is meant only for 
                        this hub, and users cannot use their smartphones to interact with the display.
                    </p>

                    <p className="headings">Role</p>
                    <p>I worked individually to create a proper visualization for the data. My goal was to utilize practical needs
                        and subtle cues to create an informative and beautiful display. 
                    </p>
                <p className="headings">Problem</p>
                    <p>Data driven displays often have <strong>many facets of information</strong> that need to be displayed such as departure and arrival time,
                        mode of transportation, departure and arrival location, etc. If designed improperly, it severely hinders the travel experience for users.
                        How do we display all this information <strong>thoughtfully</strong>?
                    </p>
                <p className="headings">Methods</p>
                <div className="methods">
                    <div className="methods-icon">
                        <FaProjectDiagram size={50}/>
                        <p>Affinity Diagramming</p>
                    </div>
                    <div className="methods-icon">
                        <BsFillGrid3X2GapFill size={50}/>
                        <p>Concept Sketches</p>
                    </div>
                    <div className="methods-icon">
                        <IoIosBuild size={50}/>
                        <p>Color Prototype</p>
                    </div>
                </div>
                <p className="headings">Concept Sketches</p>
                <div className="concept-sketches">
                    <p>I used the 5 Hat Racks: Location, Alphabet, Time, Category, and Hierarchy as a guide for my concept sketches.</p>
                    <div>
                        <img src={Sketch3} alt="Concept Idea 1"/>
                        <img src={Sketch4} alt="Concept Idea 1 Page 2"/>
                    </div>
                    <p>Travelers will mainly be looking for their destination, thus organizing it alphabetically makes it the easiest to find. 
                        Similarly, displaying different types of routes and how to get there in steps fits into a cognitive map that Google and 
                        Apple Maps have employed already. 
                        <br></br><br></br>
                        <strong>Areas of improvement</strong> I realized that this type of set up is great for individual interaction, but for a 
                        large scale data display, having one person walk up and interact detracts from others' experiences with it and ability to 
                        get information from it.
                    </p>
                    
                    <div>
                        <img src={Sketch5} alt="Concept Idea 2"/>
                        <img src={Sketch6} alt="Concept Idea 2 Page 2"/>
                    </div>
                    <p>Maps are visually very powerful for travelers. They can spot their destinations immediately and gain a lot of relative information 
                        that is important for building context. It's also a great way for showing different modes of transportation (flight, train, or ferry) 
                        to a location.  
                        <br></br><br></br>
                        <strong>Areas of improvement</strong> This would be a great accessory to add into the large data display, but by itself, a map does not 
                        provide the level of detail that is needed for travelers such as time, port/gate/dock number, flight/train/ferry number, etc.
                    </p>
                    <img src={Sketch7} alt="Concept Idea 3"/>
                    <p>This design was inspired from flight booking services like Expedia. I think it's a great format for finding options that fit specific requirements 
                        that the traveler has in mind. 
                        <br></br><br></br>
                        <strong>Areas of improvement</strong> Like the first idea, this requires a lot of interaction and most likely would not be used in a large scale data
                         display. However, I like the idea of organizing by all the modes of transportation.
                    </p>
                    <p>I realized I had a misconception about what a data display should be doing. I had been trying to provide many functionalities to gear towards individuals, 
                        instead of providing a visually rich display that targets all travelers and meets each of their specific needs (e.g. their travel information).
                        <br></br><br></br>
                        As a result, I consolidated my insights and came up with a different approach.</p>
                </div>
                
                <p className="headings">Insights</p>
                <div className="insights">
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Data driven displays need to show information with <strong>minimal interaction from individuals</strong></p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Relevant information that isn't provided by the data can be utilized in the display</p>
                    </div>
                    <div className="insights-icon">
                        <HiLightBulb size={30}/>
                        <p>Users should be able to find the information <strong>relevant to their trip quickly</strong>, without impedence, especially if they're in a rush
                        </p>
                    </div>
                </div>
                <p className="headings">Solution</p>
                <img src={Day} alt="Showscape Prototype Select Party View"/>
                <img src={Dusk} alt="Showscape Prototype Audience Screen"/>
                <img src={Night} alt="Showscape Prototype Audience Screen"/>
                <ol>
                    <li>Used <strong>immediate visual cues </strong>to give information about time:</li>
                        <ul>
                            <li>Blue gradient to represent day</li>
                            <li>Orange and purple to represent dusk</li>
                            <li>Navy blue and purple to represent midnight​</li>
                        </ul>
                    <li>Added weather, date, and time features at the top right corner for additional, relevant information</li>
                    <li>Added Atlantis Hub and branded it with a logo so that it would become the <strong>point of entry </strong>for users</li>
                    <li>Organized data table in a <strong>hierarchy by transportation mode, destination, time, and then other information </strong>
                    to provide ease of searching for travelers.</li>
                </ol>
                <p></p>
                <p className="headings">Next Steps</p>
                <p>This project has been rewarding in so many ways. It's the first time I have ever done any prototyping or animating, and even though my 
                    laptop broke in the middle of the project, the time crunch made me pick up skills related to Illustrator and Sketch very quickly. It was 
                    super enjoyable trying to learn how to use these programs for the first time.
                    <br></br><br></br>
                    I also learned a lot about what design is. It is very user oriented, but it also must fit in the realistic constraints of what humans 
                    and businesses are willing to do. Especially in an age where data and information are abundant, I think it is incredibly useful to know 
                    how to filter and organize relevant information for others, and how to display it so that it serves a purpose.
                    <br></br><br></br>
                    If I revisit this project, I would test this display on real people to receive feedback and implement changes.
                </p>
            </div>
        </div>
    );
  };
  
  export default Atlantis;