import data from "../../data/index.json";
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import PlantPlanner from "./PlantPlanner";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function Projects() {

    const [openModal, setOpenModal] = useState(false)

    return (
        <section className="flex flex-col lg:grid-cols-2 pt-20 justify-between space-10" id="Projects">
            <h1 className="text-purple sm:ml-4 sm:mt-4 lg:ml-10 lg:mt-10">Projects</h1>
            <div className="pb-10 px-5 flex sm:flex-col lg:flex-row lg:space-x-5">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="mt-7 portfolio--section--card">
                        <div className="portfolio--section--img object-cover w-full h-400">
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
                            }}><h3 className="text-md portfolio--link">
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