import { Container, Row,Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import python from'../assets/img/python-img.png';
import java from'../assets/img/java-img.svg';
import react from'../assets/img/react-img.png';
import django from'../assets/img/django-img.svg';
import html from '../assets/img/html-img.svg';
import css from '../assets/img/css-img.svg';
import mysql from '../assets/img/mysql-img.svg';
import js from '../assets/img/js-img.svg';
import haskell from '../assets/img/haskell-img.svg';
import clang from '../assets/img/c-img.svg';
import postgres from '../assets/img/postgre-img.svg';
import firebase from '../assets/img/firebase-img.svg';
import github from '../assets/img/nav-icon2.svg';
import gitlab from '../assets/img/gitlab.svg';
import jira from '../assets/img/jira-img.svg';
import notion from '../assets/img/notion-img.svg';
import mongo from '../assets/img/mongodb.svg';
import node from '../assets/img/node-logo.svg';
import colorSharp from '../assets/img/color-sharp.png';
import colorSharp2 from '../assets/img/color-sharp2.png';
import { NodeMinusFill } from "react-bootstrap-icons";
export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max : 4000, min: 3000},
            items: 5
        },

        desktop: {
            breakpoint: { max : 3000, min: 1024},
            items: 3
        },

        tablet: {
            breakpoint: { max : 1024, min: 464},
            items: 2
        },
        mobile: {
            breakpoint: { max : 464, min: 0},
            items: 1
        }
    };

    return(
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                       <div className="skill-bx wow zoomIn">
                        <h2>
                            Skills
                        </h2>
                        <p>I can work on the frontend and backend of an application. I am also able to collect, manipulate and interpret data using the scientific library of Python. I can also implement artificial intelligence algorithms to create robust machine learning models using mostly: </p>
                       <div className="skills-ai"> <p>Pytorch  <br></br>Numpy <br></br> Pandas <br></br> Tenserflow   <br></br> Scikit-Learn<br></br>Matplotlib</p> </div>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img className="im-logo" src={python} alt="Image" />
                                <h5 className="item-text">Python</h5>
                            </div>

                            <div className="item">
                                <img  className="im-logo" src={java} alt="Image" />
                                <h5 className="item-text">Java</h5>
                            </div>

                            <div className="item">
                                <img className="im-logo" src={react} alt="Image" />
                                <h5 className="item-text">React</h5>
                            </div>

                            <div className="item">
                                <img className="im-logo" src={django} alt="Image" />
                                <h5 className="item-text">Django</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={html} alt="Image" />
                                <h5 className="item-text">Html</h5>
                            </div>

                            <div className="item">
                                <img className="im-logo" src={css} alt="Image" />
                                <h5 className="item-text">Css</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={js} alt="Image" />
                                <h5 className="item-text">JavaScript</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={clang} alt="Image" />
                                <h5 className="item-text">C</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={haskell} alt="Image" />
                                <h5 className="item-text">Haskell</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={mysql} alt="Image" />
                                <h5 className="item-text">MySQL</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={postgres} alt="Image" />
                                <h5 className="item-text">PostgreSQL</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={firebase} alt="Image" />
                                <h5 className="item-text">Firebase</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={github} alt="Image" />
                                <h5 className="item-text">GitHub</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={gitlab} alt="Image" />
                                <h5 className="item-text">GitLab</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={jira} alt="Image" />
                                <h5 className="item-text">Jira</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={notion} alt="Image" />
                                <h5 className="item-text">Notion</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={node} alt="Image" />
                                <h5 className="item-text">NodeJS</h5>
                            </div>
                            <div className="item">
                                <img className="im-logo" src={mongo} alt="Image" />
                                <h5 className="item-text">MongoDB</h5>
                            </div>
                        </Carousel>
                       </div>
                    </div>
                </div>
            </div>
            <img src={colorSharp} alt="Image" className="background-image-left" />
        </section>
    );

}