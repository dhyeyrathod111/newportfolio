import React from 'react';
import { Link } from 'react-router-dom';

const OneTechnologyComp = props => {
    return (
        <div className="col-md-4">

            <div className="single-blog-card card border-0 shadow-sm">
                <div className="blog-img position-relative">
                    <Link to={'/technology_details/' + props.name + '/' + props.id}>
                        <img src={'assets/' + props.image} className="card-img-top skillImage" alt="blog" />
                    </Link>
                </div>
                <div className="card-body">
                    <h3 className="h5 mb-2 card-title">
                        <Link to={'/technology_details/' + props.name + '/' + props.id}>{props.name}</Link>
                    </h3>
                    <p className="card-text text-justify">
                        {props.description}
                    </p>
                    <Link to={'/technology_details/' + props.name + '/' + props.id} className="detail-link">Read more <span className="ti-arrow-right" /></Link>
                </div>
            </div>

        </div>
    )
}

export default OneTechnologyComp
