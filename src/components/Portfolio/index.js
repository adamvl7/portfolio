import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";

const Portfolio = () => { 
    const [letterClass, setLetterClass] = useState('text-animate');
    const [currentImageIndex, setCurrentImageIndex] = useState({});
    const [portfolio] = useState([
        {
            name: "IT Ops Copilot",
            description: "The IT Ops Copilot is a backend automation platform built with FastAPI to simulate how IT support teams manage service tickets and workflow automation. The project features a RESTful API that can create, read, and manage operational requests (tickets) such as onboarding, software installations, or access issues—all stored dynamically in a CSV-based dataset. Users can generate and query tickets through simple HTTP endpoints, view live data in JSON format, and test the API interactively through the built-in Swagger UI. It demonstrates key backend engineering skills including API design, data serialization, and automation-ready architecture for future integrations with systems like Slack, Google Sheets, or internal dashboards.",
            images: ["It_Ops_Copilot.png", "It_Ops_Copilot2.png"],
            url: "#"
        },
        {
            name: "Pickleball Match Tracker",
            description: "A full-stack web application built with Next.js, TypeScript, and Tailwind CSS that helps pickleball players log and analyze their matches in one place. Users can record match details including date, opponent name, DUPR rating, scores, and outcomes — and instantly view win/loss statistics and performance trends.",
            images: ["Pickleball_Match_Tracker.png"],
            url: "#"
        },
        {
            name: "AI Image Classifier",
            description: "The AI Image Classifier is a lightweight web app that uses a pre-trained MobileNetV2 deep learning model to identify objects in images with real-time predictions. The model converts uploaded images into numerical tensors, processes them through its neural network layers, and returns the top three most probable classifications with confidence scores. Built with Streamlit for a clean and interactive interface, users can upload any image (JPEG or PNG) and instantly see the AI’s predictions displayed in an intuitive format. This project demonstrates practical applications of computer vision, transfer learning, and neural network inference for real-world use cases such as automated tagging or visual search. Key Features: Real-time image classification using MobileNetV2 (pre-trained on ImageNet). User-friendly Streamlit interface for image uploads and visualization. Displays top 3 predictions with accuracy percentages. Efficient preprocessing with OpenCV and NumPy for optimal performance. Results: Achieved up to 90%+ classification accuracy on common object datasets. Processed images in under 1 second per prediction, showcasing model efficiency.",
            images: ["AI_Project.png"],
            url: "#"
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    });

    const handleImageChange = (idx, direction) => {
        setCurrentImageIndex(prev => {
            const current = prev[idx] || 0;
            const images = portfolio[idx].images;
            const newIndex = direction === 'next' 
                ? (current + 1) % images.length 
                : (current - 1 + images.length) % images.length;
            return { ...prev, [idx]: newIndex };
        });
    };

    const renderPortfolio = (portfolio) => {
        return (
            <div className="images-container">
                {
                    portfolio.map((port, idx) => {
                        const currentIndex = currentImageIndex[idx] || 0;
                        const imageName = port.images[currentIndex] || port.images[0];
                        let imgSrc = imageName && imageName.startsWith('/') ? imageName : null;
                        
                        try {
                            if (!imgSrc) imgSrc = require(`../../assets/images/${imageName}`);
                        } catch (e) {
                            imgSrc = imageName || '';
                        }

                        return (
                            <div className="image-box large-box" key={idx}>
                                <img 
                                    src={imgSrc}
                                    className="portfolio-image"
                                    alt={port.name} 
                                />
                                {port.images.length > 1 && (
                                    <div className="image-navigation">
                                        <button 
                                            onClick={() => handleImageChange(idx, 'prev')}
                                            className="nav-button prev"
                                        >
                                            &#8249;
                                        </button>
                                        <button 
                                            onClick={() => handleImageChange(idx, 'next')}
                                            className="nav-button next"
                                        >
                                            &#8250;
                                        </button>
                                    </div>
                                )}
                                <div className="content">
                                    <p className="title">{port.name}</p>
                                    <h4 className="description">{port.description}</h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }


    return (
        <>
            <div className="container portfolio-page">
                <h1 className="page-title">
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={"Portfolio".split("")}
                        idx={15}
                    />
                </h1>
                <div>{renderPortfolio(portfolio)}</div>
            </div>
            <Loader type="pacman" />
        </>
    );
}

export default Portfolio;