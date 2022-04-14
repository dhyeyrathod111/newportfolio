import React from 'react'
import { Link } from 'react-router-dom';

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
                    <h2 className="h2 mb-2 card-title text-center"><Link to={'/projects_details/'+props.name+'/'+props.prjectID}>{props.name}</Link></h2>
                </div>
            </div>
        </div>
    )
}

export default OneProjectComp;
