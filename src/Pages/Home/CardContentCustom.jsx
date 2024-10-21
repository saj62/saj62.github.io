import React from 'react';
import { X } from 'lucide-react';

function CardContentCustom({ closeModal, project }) {
    return (
        <div className="fixed inset-0 bg-bg bg-opacity-75 flex justify-center items-center z-50"> 
            <div className="flex flex-col rounded-lg w-11/12 max-w-3xl bg-white p-6 lg:p-10 m-20 overflow-scroll h-2/3"> 
                {/* Close Button */}
                <div className="relative flex justify-end mb-4">
                    <button onClick={() => closeModal(false)}>
                        <X className='w-10 h-10 text-purple hover:text-ice transition-colors duration-300'/>
                    </button>
                </div>
                {/* IMAGE */}
                <div className="flex justify-center mb-4">
                    <img className="rounded-lg w-full max-w-md object-cover aspect-video" src={project.src} alt={project.title} />
                </div>
                <div className="text-center text-purple mb-4">
                    <h1 className='text-4xl lg:text-5xl'>{project.title}</h1>
                </div>
                {/* BODY */}
                <div className="py-4 px-2">
                    {project.details.map((detail, index) => (
                        <h4 key={index} className="mb-2 text-light-purple">{detail}</h4>
                    ))}
                </div>
                <div className="mb-4">
                    <h3 className="text-lg text-light-purple">Dates: {project.dates}</h3>
                    <h3 className="text-lg text-light-purple">Technologies Used: {project.technologies}</h3>
                </div>

                <a 
                    href={project.url}  // Ensure the URL is valid
                    className="mt-4 px-4 py-2 rounded text-md portfolio--link"
                    rel="noopener noreferrer"
                >
                    <h3 className=''>Github</h3>
                </a>
            </div>
        </div>
    );
}

export default CardContentCustom;