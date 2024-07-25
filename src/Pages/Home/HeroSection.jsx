import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import ButtonGroup from '../../components/ButtonGroup';

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <h2 className="">Hello! I’m</h2>
                    <h1 className="hero--name">
                        <span className="hero--name">Sarah Jacob</span>{" "}
                    </h1>
                    <h2 className="">
                    <span className="">I’m a Computer Science Major,</span>{" "}
                    <br />
                    AR/VR Researcher, and Artist
                    </h2>
                </div>
                <button className="btn btn-primary">Resume</button>
            </div>
            <div className="hero--img">
                <img src="./img/hero_img.png" alt="HeroSection" />

            </div>

        </section>
    )
}