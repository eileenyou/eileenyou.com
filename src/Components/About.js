import React from "react";
import "./About.css";
import me from "../img/eileen2.png";

const About = () => {
    return (
        <div className="description">
            <div className="propic">
              <img src={me} alt="Eileen"></img>
              <p>INFP • Sagittarius</p>
            </div>
            <div className="bio">
              <p>Hi, it's so nice to meet you! 
                  I'm Eileen, an aspiring Experience Designer and Prototyper. While I'm not crafting experiences 
                  I'll be drawing, playing some tunes on the guitar, or in the studio ballroom dancing. 
                  <br></br><br></br> 
                  One of my favorite lines is from a poem in the Fellowship of the Ring </p>
              <blockquote cite="J.R.R. Tolkien">
                "All that is gold does not glitter,
                <br></br>
                Not all those who wander are lost"
              </blockquote>
              <p>
                It reminds me that the process of exploration may be long, but is both humbling and rewarding. 
                I am currently looking for full-time jobs. </p>
            </div>
        </div>
    );
  };
  
export default About;