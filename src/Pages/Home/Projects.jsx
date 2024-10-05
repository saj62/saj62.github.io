import data from "../../data/index.json";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PlantPlanner from "./PlantPlanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <section className="portfolio--section" id="Projects">
            <h1 className="projects--title">Projects</h1>
            <div className="portfolio--container--box">
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
                            <div>
                            <button className="modal-btn" onClick={() => {
                                setOpenModal(true);
                            }}><h3 className="text-sm portfolio--link">
                            {item.link}
                            <FontAwesomeIcon icon={faArrowUpRightFromSquare}/>
                        </h3></button>
                        </div>
                        </div>
                        {openModal && <PlantPlanner closeModal={setOpenModal} />}
                    </div>
                )
                )}
            </div>
        </section>
    );
}