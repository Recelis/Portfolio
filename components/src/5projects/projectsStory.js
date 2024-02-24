import React from "react";

import Grid from "@material-ui/core/Grid";

export default function ProjectsStory(props) {
  return (
    <div className="projects__story">
      <a href={props.projectLink} className="projects__link">
        <img className="projects__img" src={props.projectImg} />
        <h3 className="projects__title"> {props.project}</h3>
        <p className="projects__text">{props.projectText}</p>
      </a>
    </div>
  );
}
