import { Col, Container, Row ,Nav, Tab} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png';
import projImg1 from '../assets/img/projImg1.png';
import projImg2 from '../assets/img/projImg2.png';
import projImg3 from '../assets/img/projImg3.png';
import projImg4 from '../assets/img/projImg4.png';
import mask from '../assets/img/mask.png';
import ishihara from'../assets/img/ishihara.png';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { Geo } from "react-bootstrap-icons";

export const Projects = () =>{

    const webDev =[

    
        
        {
            title: "TypeHub",
            description:"TypeHub is a website that allows you to train your keyboarding skills. You can have in real time the number of words you have typed, the number of characters and also your typing speed (words per minute).",
            imgUrl: projImg1,
            github:"https://github.com/Sy-Cheikh/TypeHub",
            visiteSite:"https://type-hub.vercel.app",
            stacks: ['React','CSS3','API']
        },

        {
            title: "TodoList",
            description:"Simple TodoList helping you to organize your day.You can add a todo, delete it or update it(by changing the content).",
            visiteSite:"https://todo-list-cyan-tau.vercel.app",
            github:"https://github.com/Sy-Cheikh/TodoList",
            imgUrl: projImg3,
            stacks:['React','CSS']
        },
        {
            title: "NameGen",
            description:"NameGen is a tool for generating project names. You just have to pass it any keyword and it will suggest you the different names you can give to your project.",
            imgUrl: projImg2,
            github:"https://github.com/Sy-Cheikh/NameGen",
            visiteSite:"https://sy-cheikh.github.io/NameGen/",
            stacks: ['React','CSS']
        },

        {
            title: "Portfolio",
            description:"My own portfolio website.",
            imgUrl: projImg4,
            github:"https://github.com/Sy-Cheikh/NameGen",
            visiteSite:"https://sy-cheikh.github.io/NameGen/",
            stacks: ['React','CSS','Bootstrap','AnimateCSS','EmailJS']
        },


        
      
    ];
    const aiDev =[
        {
            title: "What Do You Look Without Mask?",
            description:"With the Covid-19 pandemic, we have learned to wear masks on a daily basis. Now half of our face is hidden, leaving only the eyes as a visible means of expression. The objective of this mini-project is to fill the mask area with a face that is the most similar using PCA and k nearest neighbours from the scratch.",
            imgUrl: mask,
            github:"https://gitlab.com/Sy-Cheikh/covid-mask",
            // visiteSite:"",
            stacks: ['Python','Scikit-Learn','Numpy','MatplotLib']
        },
        {
            title: "IshiharaTest",
            description:"We try to identify individuals who cannot distinguish a pattern in an image of approximately uniform luminance that appears only in the chrominances. PCA(Principal Component Analysis) was used to distinguish the pattern.",
            imgUrl: ishihara,
            github:"https://github.com/Sy-Cheikh/IshiharaTest",
            // visiteSite:"",
            stacks: ['Python','Scikit-Learn','Numpy','MatplotLib']
        },

    ]

    return(
     
        <section className="project" id="projects">
             <Container>
                <Row>
                    <Col size={12}>
                    <TrackVisibility>
                       {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeInLeft" : ""}>
                     
                            <h2>Projects</h2>
                            <p>Feel free to explore some of my projects. They are grouped in two sections: Web Developement and Artificial Intelligence. The technical stack for each project is detailed and you can test them by clicking on "Visite Site" or check the code on Github.</p>
                        </div>}
                    </TrackVisibility>
                     <Tab.Container id="projects-tabs" defaultActiveKey="first">
                         <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Web Developement</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Artificial Intelligence</Nav.Link>
                                </Nav.Item>
                                
                                
                          </Nav>
                          <Tab.Content  id="slideInUp" >
                              <Tab.Pane eventKey="first">
                                 <Row>
                                    {
                                        webDev.map((project,index) =>{
                                            return(
                                                <ProjectCard
                                                   key={index}
                                                   title={project.title}
                                                   description={project.description}
                                                   imgUrl={project.imgUrl}
                                                   stacks={project.stacks}
                                                   visiteSite={project.visiteSite}
                                                   github={project.github}
                                                   
                                                />
                                            )
                                        })
                                    }
                                 </Row>

                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                              <Row>
                                    {
                                       aiDev.map((project,index) =>{
                                            return(
                                                <ProjectCard
                                                   key={index}
                                                   title={project.title}
                                                   description={project.description}
                                                   imgUrl={project.imgUrl}
                                                   stacks={project.stacks}
                                                //    visiteSite={project.visiteSite}
                                                   github={project.github}
                                                   
                                                />
                                            );
                                        })
                                    }
                                 </Row>
                              </Tab.Pane>
                              
                             
                          </Tab.Content>
                        </Tab.Container>

                    </Col>
                </Row>
             </Container>
             <img src={colorSharp2} alt="" className="background-image-right" />
        </section>
        
    );
}