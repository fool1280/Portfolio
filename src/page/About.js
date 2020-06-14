import React from 'react'
import Navigation from '../components/Navigation'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3Alt, faJsSquare, faReact, faBootstrap, faPython, faCuttlefish, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function About() {
    let openNewTab = (url) => {
        let win = window.open(url, '_blank');
    }
    return (
        <div>
            <Navigation/>
            <div className="d-flex align-items-center min-vh-100" style={{backgroundColor: "rgba(32, 34, 38)", color: "white", minHeight: "50%"}}>
                <Container>
                    <Row className="mt-5">
                        <h1>My Story...</h1>
                    </Row>
                    <Row className="mt-5">
                        <Col sm={4}>
                            <img className="rounded" src="/images/user.jpg" style={{width: "100%"}}></img>
                            <div className="d-flex flex-row justify-content-center">
                                <FontAwesomeIcon className="m-2" type="button" icon={faLinkedin} size="4x" onClick={() => openNewTab("https://www.linkedin.com/in/anh-nguyen-861625179/")}/>
                                <FontAwesomeIcon className="m-2" type="button" icon={faGithub} size="4x" onClick={() => openNewTab("https://github.com/fool1280")}/>
                            </div>
                        </Col>
                        <Col sm={8} className="d-flex flex-column">
                            <h3>{`Hi, my name is Anh Nguyen!`}</h3>
                            <p>
                                {`I'm a rising sophomore at Texas A&M University - College Station, TX. I'm also a proud member of the Corps of Cadets, Squadron 12! I was the first person on the left!`}
                            </p>
                            <img className="mx-auto mb-3" src="/images/IMG_2295.JPG" style={{width: "70%"}}></img>
                            <p>
                                {`I first learned about programming when I was in eighth grade. Since then, I have attend several competition in Competitive Programming, mainly using C++ or Pascal. In 2018, I joined a math camp organized by PIMA - Projects in Mathematics and Applications in Machine Learning and completed a report about Support Vector Machine and how it is used in detection credit card fraud transaction.`}
                                <br/><br/>
                                {`Besides coding, I'm also interested in photography. In high school, I have been produced media contents for the sports teams. Summer 2019, I had the chance to work with two professional basketball players: Zach Auguste & Quincy Ford.`}
                            </p>
                        </Col>
                    </Row>
                    <Row className="mt-5 flex-column">
                        <h1>
                            Skills:
                        </h1>
                        <h4 className="mt-2">
                            Currently, my skills are included:  C++, Python, HTML5, CSS, JavaScript, React JS, and Bootstrap.
                        </h4>
                    </Row>
                    <Row className="mt-3 mb-5">
                        <Col className="w-100">
                            <FontAwesomeIcon className="mr-3" icon={faPython} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faCuttlefish} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faHtml5} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faCss3Alt} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faJsSquare} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faBootstrap} size="5x"/>
                            <FontAwesomeIcon className="mr-3" icon={faReact} size="5x"/>
                        </Col>
                    </Row>
                    
                </Container>
            </div>
        </div>
    )
}
