import data from "../../data/index.json";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {
    return (
        <section className="portfolio--section" id="Projects">
            <div className="portfolio--container--box">
                <div className="portfolio--container">
                    <h1 className="section--title">Projects</h1>
                </div>
            </div>
            <div className="portfolio--section--container">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="portfolio--section--card">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder"/>
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h2 className="portfolio--section--title">{item.title}</h2>
                                <h3 className="text-md">{item.description}</h3>
                            </div>
                            <h3 className="text-sm portfolio--link">
                                {item.link}
                                <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                            </h3>
                        </div>
                    </div>
                )
                )}
            </div>
        </section>
    );
}