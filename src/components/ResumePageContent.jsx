import React, { useState } from 'react';

const SSC = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Secondary School Certificate (2009 - 2010)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>R. C. Patel High School</h5>
                    <h5>Studied at Mumbai University</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download certificate</a>
                </div>
            </div>
        </article>
    )
}

const HSC = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Higher Secondary Certificate (2012 - 2013)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>Durgadevi saraf junior college of commerce and science</h5>
                    <h5>Studied at Mumbai University</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download certificate</a>
                </div>
            </div>
        </article>
    )
}

const BCA = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Bachelor of Computer Applications (2016 - 2017)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>Atharva institute of information technology - AIIT</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download certificate</a>
                </div>
            </div>
        </article>
    )
}

const Webinfotech = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Web infotech india (2016 - 2017)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>Junior PHP Developer</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download Documents</a>
                </div>
            </div>
        </article>
    )
}

const WDIPL = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Website Developers In India (WDIPL) (2019-2020)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>Junior PHP Developer</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download Documents</a>
                </div>
            </div>
        </article>
    )
}

const ASSPL = props => {
    return (
        <article className="post">
            <div className="post-wrapper">
                <div className="post-header">
                    <h2 className="post-title text-center">Aarav software services pvt. ltd. (ASSPL) (2020-2021)</h2>
                </div>
                <div className="post-content text-center">
                    <h5>PHP Developer</h5>
                </div>
                <div className="text-center">
                    <a href="#" className="btn secondary-solid-btn">Download Documents</a>
                </div>
            </div>
        </article>
    )
}

const Education = props => {
    return (
        <React.Fragment>
            <BCA />
            <HSC />
            <SSC />
        </React.Fragment>
    )
}

const WorkExperience = props => {
    return (
        <React.Fragment>
            <Webinfotech /><WDIPL /><ASSPL />
        </React.Fragment>
    )
}
function ResumePageContent() {
    const [active, setActive] = useState('work');
    const pointMark = { cursor: "pointer" }
    return (
        <div className="module ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="sidebar-left pr-4">
                            <aside className="widget widget-categories">
                                <button type="submit" className="btn secondary-solid-btn btn-block btn-not-rounded mt-3">Download Resume</button>
                            </aside>
                            <aside className="widget widget-categories">
                                <ul>
                                    <li style={pointMark}><h5 onClick={() => setActive('work')} href="#">Work Experience</h5></li>
                                    <li style={pointMark}><h5 onClick={() => setActive('education')} href="#">Education</h5></li>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">
                        {active === 'work' ? <WorkExperience /> : <Education />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResumePageContent;
