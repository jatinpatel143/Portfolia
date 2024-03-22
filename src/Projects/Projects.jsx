import React from "react";
import ProjectsCards from "./ProjectsCards";
// import ProjectsIntro from "./ProjectsIntro";

const Projects = () => {
  return (
    <div className="container" id="com">
<>
<div className="project-intro mt-5" id='projects'>
        <h1 className="Project-title">
          My Awesome
          <span> Project's</span>
        </h1>
      </div>
      
<ProjectsCards />
{/* <ProjectsCards/> */}
</>
    </div>
  );
};

export default Projects;
