import React, { useState } from 'react';

const ProjectImages = ({ images, projectName }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };
    
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    
    if (!images || images.length === 0) return null;
    
    return (
        <div className="image-container">
            {images.length > 1 && (
                <button className="nav-button prev" onClick={handlePrev}>
                    ❮
                </button>
            )}
            <img
                src={require(`../../assets/images/${images[currentIndex]}`)}
                className="portfolio-image"
                alt={`${projectName} - ${currentIndex + 1}`}
            />
            {images.length > 1 && (
                <button className="nav-button next" onClick={handleNext}>
                    ❯
                </button>
            )}
        </div>
    );
};

export default ProjectImages;