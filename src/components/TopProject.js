import React from 'react';

const TopProject = ({ imgSrc, altText, cardTitle, href, children }) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <img src={imgSrc} className="card-img-top" alt={altText} />
            <div className="card-body">
                <h5 className="card-title">
                    {cardTitle}
                </h5>
                <p className="card-text">
                    {children}
                </p>
                <a href={href} className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default TopProject;
