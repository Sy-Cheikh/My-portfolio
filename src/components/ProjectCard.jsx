import { Col } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Github } from "react-bootstrap-icons";

export const ProjectCard = (props) =>{

    return(
        <Col sm={6} md={4}>
            <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? 'animate__animated animate__pulse' : ''}>
            <div className="proj-imgbx">
                <img src={props.imgUrl} alt="project-card" />
                <div className="proj-txtx">
                <h4>{props.title}</h4>
                <span>{props.description}</span>
                </div>
            </div>
            <h4>{props.title}</h4>
            <div className="actions">
                <div className="action"><a href={props.visiteSite}>Visit Site</a></div>
                <div className="action"><a href={props.github}>GitHub <Github /></a></div>
            </div>
            <div className="stacks">
                {props.stacks.map((stack,index) => (
                <span className="stack" key={index}>{stack}</span>
                ))}
            </div>
            </div>}
            </TrackVisibility>
    </Col>
    );

};