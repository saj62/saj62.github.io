import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Typewriter from '../../components/TypeWriter'

import { Container } from 'react-bootstrap'


export default function HeroSection() {
    return (
        <section id="heroSection" className="bg-bg flex flex-col lg:flex-row items-center justify-center py-20">

            <div className="flex flex-col p-6 m-1 ml-3">
                <div className="">
                    <h2 className="text-3xl text-light-purple">Hello! I’m</h2>
                    <h1 className="text-6xl text-purple">Sarah Jacob</h1>
                    <h2 className="text-3xl text-wrap text-light-purple"><Typewriter /></h2>
                    
                </div>
                <div className="mt-5 flex flex-row">
                    <div className="social-media-icons">
                        <a href="mailto:sarannjac@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} />
                        </a>
                        <a href="https://github.com/saj62">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a href="https://www.linkedin.com/in/sarah-ann-jacob">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <button className="btn btn-primary">Resume</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col p-6 justify-start'>
                <div className="flex flex-col rounded-full w-96 h-96">
                    <img src="./img/hero_img.png" alt="HeroSection" />

                </div>
            </div>
            

        </section>
    )
}