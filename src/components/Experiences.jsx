import { Geo } from "react-bootstrap-icons";
import TrackVisibility from 'react-on-screen';
import { Col } from "react-bootstrap";
export const Experiences =() =>{

    return(

    <Col sm={6} md={4}> 
        <TrackVisibility>
           {({ isVisible }) =>
        < div className="experience-container">
            <div className= {isVisible ? 'animate__animated animate__pulse' : '' }>
                    <h2 className="exp-title">Experience :</h2>
                    <div> 
                            <h3 className="internship"> Internship  </h3>
                            <h4>Machine Learning Developer</h4>
                            <h5><Geo/>Euromov Montpellier, France</h5>
                        
                    </div>

                    <div> 
                            <h3 className="internship second-intern"> Internship  </h3>
                            <h4>Software Developer</h4>
                            <h5><Geo/>Bluekeys  Bordeaux ,France</h5>
                    
                    </div>
            </div>
      </div>}
      </TrackVisibility>
      </Col>
    )
      
}



  
    
