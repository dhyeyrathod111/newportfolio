import React from 'react'

const OneProjectComp = props => {
    const styleObj = {
        border:'0 !important',
    }
    return (
        <div className="col-md-6">
            <div className="single-blog-card card border-0 shadow-sm">
                <div className="blog-img position-relative">
                    <img src={'assets/' + props.image} className="card-img-top skillImage" alt="blog" />
                </div>
                <div className="card-body">
                    <h2 className="h2 mb-2 card-title text-center"><a href="#">{props.name}</a></h2>
                </div>
            </div>
        </div>
    )
}

export default OneProjectComp;
