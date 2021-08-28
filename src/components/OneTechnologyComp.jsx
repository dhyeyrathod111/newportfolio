import React from 'react'

const OneTechnologyComp = props => {
    return (
        <div className="col-md-4">
            <div className="single-blog-card card border-0 shadow-sm">
                <div className="blog-img position-relative">
                    <img src={'assets/'+props.image} className="card-img-top skillImage" alt="blog" />
                </div>
                <div className="card-body">
                    <h3 className="h5 mb-2 card-title"><a href="#">{props.name}</a></h3>
                    <p className="card-text text-justify">
                        {props.description}
                    </p>
                    <a href="#" className="detail-link">Read more <span className="ti-arrow-right" /></a>
                </div>
            </div>
        </div>
    )
}

export default OneTechnologyComp
