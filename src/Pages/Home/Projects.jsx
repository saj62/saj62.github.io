import data from "../../data/index.json";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CardContentCustom from "./CardContentCustom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

export default function Projects() {
    const [openModal, setOpenModal] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="flex flex-col mx-4 pb-20" id="Projects">
            <h1 className="text-purple sm:ml-4 sm:mt-8 lg:ml-10 lg:mt-10">Projects</h1>
            <div className="lg:mx-10 lg:grid grid-cols-2 gap-10">
                {data?.portfolio?.map((item, index) => (
                    <div key={index} className="mt-7 portfolio--section--card w-500px">
                        <div className="portfolio--section--img">
                            <img src={item.src} alt="Placeholder" className="w-fit object-cover aspect-video" />
                        </div>
                        <div className="portfolio--section--card--content">
                            <div>
                                <h2 className="portfolio--section--title">{item.title}</h2>
                                <h3 className="text-md">{item.description}</h3>
                            </div>
                            <div>
                                <button className="modal-btn" onClick={() => {
                                    setSelectedProject(item);
                                    setOpenModal(true);
                                }}>
                                    <h3 className="text-md portfolio--link">
                                        {item.link}
                                        <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
                                    </h3>
                                </button>
                            </div>
                        </div>
                        {openModal && <CardContentCustom closeModal={setOpenModal} project={selectedProject} />}
                    </div>
                ))}
            </div>
            <div>
            </div>
        </section>
    );
}
