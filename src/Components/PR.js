import React from "react";
import ReactPlayer from 'react-player'

import Front from '../img/FinalRushFront.png';
import Back from '../img/FinalRushBack.png';
import MembershipCard from '../img/MembershipCard_v2.jpg';
import PunchCard from '../img/MembershipPunchCard_v2.jpg';
import "./ProjectsInfo.css";

const PR = () => {
    return (
            <div className="projectInfo">
                <h4>Ballroom Dance Club PR Material</h4>
                <div className="group-img">
                    <img src={Front} className="title-img" alt="Showscape Prototype Select Party View"/>
                    <img src={Back} className="title-img" alt="Showscape Prototype Select Party Size"/>
                </div>
                <div className="summary">
                    <p>Carnegie Mellon University's Ballroom Dance Club is open to undergraduates, graduates, and adults within the Pittsburgh community. 
                        We're incredibly unique because we offer professional and student-taught lessons to the Pittsburgh community for fun, and also fund 
                        four competitions per semester for our Competitive Team to travel to.
                    </p>

                    <p className="headings">Role</p>
                    <p>I created advertising material such as rush cards, banners, posters, promotional videos for CMU Ballroom Dance Club and maintained social 
                        media presence on Facebook and Instagram.
                    </p>
                    <p>When I first joined this club, I was enchanted by the beautiful dancers. It was a magical feeling that has never left me. Now, I have gotten 
                        to know these beautiful dancers and I'm proud to call them my friends. Since I have joined, this community has been so heartwarming and special 
                        to me, and I wanted to convey this to people who hadn't experienced it before.
                    </p>
                <div className="group-img">
                    <img src={MembershipCard} className="content-img" alt="Showscape Prototype Audience Screen"/>
                    <img src={PunchCard} className="content-img" alt="Showscape Prototype Audience Screen"/>
                </div>

                <p className="headings">Promotional Video</p>
                <p>I created a more engaging method of viewing ballroom, especially online. We released this video in facebook posts, events, and on our YouTube channel. Check it out below!</p>
                <br></br><br></br>
                <ReactPlayer url="https://youtu.be/RzsBxuLhTM0" controls/>
            </div>
        </div>
    );
  };
  
  export default PR;