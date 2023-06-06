import React from 'react';

const TopProject = ({ imgSrc, alt, className, cardTitle, href, children }) => {
    return (
        <div className='col'> {/*col-sm-12 col-md-6 col-lg-3 */}
            <div className={`card ${className} h-100`} >
                <img src={imgSrc} className="card-img-top img-fluid mx-auto" alt={alt} style={{ maxWidth: "65%", maxHeight: "45%"}} />
                <div className="card-body">
                    <h5 className="card-title">
                        {cardTitle}
                    </h5>
                    <p className="card-text">
                        {children}
                    </p>
                    <a href={href} className="btn btn-primary">
                        En Savoir Plus
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TopProject;
