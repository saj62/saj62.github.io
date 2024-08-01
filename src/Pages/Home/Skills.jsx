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
                <h1 className="section--title">Skills</h1>
                <div className="skills--lang--title">
                    <h2>Languages and Libraries</h2>
                </div>
                <div className="lang-lib-skills">
                    <Container>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faJava}/>
                                <div>
                                    <h2>Java</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faPython}/>
                                <div>
                                    <h2>Python</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <Logo className="svg-icon"/>
                                <div>
                                    <h2>C++</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faHashtag}/>
                                <div>
                                    <h2>C#</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faJs}/>
                                <div>
                                    <h2>JavaScript</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faReact}/>
                                <div>
                                    <h2>React</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faHtml5}/>
                                <div>
                                    <h2>HTML</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faCss3Alt}/>
                                <div>
                                    <h2>CSS</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faNode}/>
                                <div>
                                    <h2>Node.js</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faDatabase}/>
                                <div>
                                    <h2>SQL</h2>
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
                            <FontAwesomeIcon icon={faGitAlt}/>
                                <div>
                                    <h2>Git</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faAws}/>
                                <div>
                                    <h2>AWS</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faUnity}/>
                                <div>
                                    <h2>Unity</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faFigma}/>
                                <div>
                                    <h2>Figma</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faUbuntu}/>
                                <div>
                                    <h2>Ubuntu</h2>
                                </div>
                        </div>
                        <div className="tech-icons">
                            <FontAwesomeIcon icon={faBook}/>
                                <div>
                                    <h2>Jupyter Notebook</h2>
                                </div>
                        </div>
                    </Container>
                </div>
            </div>
        </section>
    )
}