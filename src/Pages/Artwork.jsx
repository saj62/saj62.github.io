import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faTumblr, faPinterest } from '@fortawesome/free-brands-svg-icons';
import Footer from './Home/Footer';

function Artwork() {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const drawings = [
        "/img/drawings/Aang.PNG",
        "/img/drawings/Higuruma-Painting.PNG",
        "/img/drawings/Higuruma-Profile.PNG",
        "/img/drawings/JJK-Hands.PNG",
        "/img/drawings/JJK-Trio-Cowboys.PNG",
        "/img/drawings/JJK-Trio.PNG",
        "/img/drawings/Katara.PNG",
        "/img/drawings/OC-Sketches.PNG",
        "/img/drawings/SatoSugu-Angst.PNG",
        "/img/drawings/SatoSuguShoko-Eyes.PNG",
        "/img/drawings/Yuuta-Wallpaper.PNG",
    ];

    // Helper function to extract the filename, remove the extension and replace "-" with spaces
    const getFileNameWithoutExtension = (filePath) => {
        const parts = filePath.split('/');
        const fileName = parts[parts.length - 1];
        return fileName.replace('.PNG', '').replace(/-/g, ' ');
    };

    return (
        <div>
            <div className="flex mx-4 lg:p-10 lg:ml-10 flex-col py-20">
                <div>
                    <h1 className="text-purple">Artwork</h1>
                    <h6 className="text-light-purple py-5 text-xl">
                        I have been creating art for almost as long as I could pick up a pencil. My interest in drawing and painting have flourished over the years, as I have tested a variety of medias. My current personal artwork consists of portraits of characters and landscape paintings. Feel free to take a look at my portfolio!
                    </h6>
                </div>
                {/* Social Media Icons */}
                <div className="my-10 flex flex-col justify-center items-center">
                    <h2 className='pb-3 text-purple'>Social Media</h2>
                    <div className='flex flex-row text-6xl gap-5 text-purple'>
                        <a className="hover:text-ice" href="https://www.instagram.com/borschtsoupart/?hl=en">
                            <FontAwesomeIcon icon={faSquareInstagram} />
                        </a>
                        <a className="hover:text-ice" href="https://borschtsoupart.tumblr.com/">
                            <FontAwesomeIcon icon={faTumblr} />
                        </a>
                        <a className="hover:text-ice" href="https://www.pinterest.com/borschtsoupart/">
                            <FontAwesomeIcon icon={faPinterest} />
                        </a>
                    </div>
                </div>
                <div>
                    <h2 className='text-purple mt-10 pb-3 flex flex-col justify-center items-center'>My Art</h2>
                    <div className="gap-8 columns-3xs">
                        {drawings.map((drawing, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-lg shadow-lg mb-8"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                <img src={drawing} alt={`Artwork ${index}`} className="w-full object-cover" />
                                {hoveredIndex === index && (
                                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
                                        {getFileNameWithoutExtension(drawing)}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div> 
            </div>
            <Footer />
        </div>
    );
}

export default Artwork;