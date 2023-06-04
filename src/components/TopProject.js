import React, { useState } from 'react'

const TopProject = () => {
    const [imageSrc, setImageSrc] = useState(prompt("Enter image source:"));
    const [altText, setAltText] = useState(prompt("Enter alt text:"));

    return (
        <>
            <div className="card" style={{width: "18rem"}}>
                <img src={imageSrc} className="card-img-top" alt={altText} />
                <div className="card-body">
                    <h5 className="card-title">
                        Card title
                    </h5>
                    <p className="card-text">
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </p>
                    <a href="#" className="btn btn-primary">
                        Go somewhere
                    </a>
                </div>
            </div>
        </>
    )
}

export default TopProject;
