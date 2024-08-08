import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faJava, faPython, faJs, faReact, faHtml5, faCss3Alt, faNode, faGitAlt, faUnity, faFigma, faUbuntu, faAws } from '@fortawesome/free-brands-svg-icons'
import { faBook, faDatabase, faHashtag } from '@fortawesome/free-solid-svg-icons'
import { ReactComponent as Logo } from "../../components/svg-logos/cplusplus.svg";
//import CSharpSvg from "./CSharpSvg";
//import SQLsvg from "./SQLsvg";
import { Container } from "react-bootstrap";


export default function Skills() {
    return (
        <section id="Skills" className="skills--section">
            <div className="hero--section--content--box">
                <div className="skills--lang--title">
                    <h2>Languages and Libraries</h2>
                </div>
                <div className="lang-lib-skills">
                    <Container>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faJava} className="svg-icon"/>
                                <div>
                                    <h3>Java</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faPython} className="svg-icon"/>
                                <div>
                                    <h3>Python</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <Logo className="svg-icon"/>
                                <div>
                                    <h3>C++</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faHashtag} className="svg-icon"/>
                                <div>
                                    <h3>C#</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faJs} className="svg-icon"/>
                                <div>
                                    <h3>JavaScript</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faReact} className="svg-icon"/>
                                <div>
                                    <h3>React</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faHtml5} className="svg-icon"/>
                                <div>
                                    <h3>HTML</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faCss3Alt} className="svg-icon"/>
                                <div>
                                    <h3>CSS</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faNode} className="svg-icon"/>
                                <div>
                                    <h3>Node.js</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faDatabase} className="svg-icon"/>
                                <div>
                                    <h3>SQL</h3>
                                </div>
                        </div>
                    </Container>
                </div>
                <div className="skills--lang--title">
                    <h2>Tools and Frameworks</h2>
                </div>
                <div className="lang-lib-skills">
                    <Container>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faGitAlt} className="svg-icon"/>
                                <div>
                                    <h3>Git</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faAws} className="svg-icon"/>
                                <div>
                                    <h3>AWS</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faUnity} className="svg-icon"/>
                                <div>
                                    <h3>Unity</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faFigma} className="svg-icon"/>
                                <div>
                                    <h3>Figma</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faUbuntu} className="svg-icon"/>
                                <div>
                                    <h3>Ubuntu</h3>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faBook} className="svg-icon"/>
                                <div>
                                    <h3>Jupyter Notebook</h3>
                                </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}