import React from 'react'

const Calltoaction = props => {
    return (
        <section className="call-to-action ptb-70" style={{ background: 'url("assets/img/cta-bg.jpg")no-repeat center center / cover' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-9">
                        <div className="section-heading text-center text-white mb-5">
                            <h2 className="text-white">Ignoring online marketing is like opening a business but not telling anyone.</h2>
                            {/* <p className="lead">Globally reinvent cross-unit human capital whereas virtual catalysts for change. Assertively network accurate methods of empowerment rather than client-centered improvements.</p> */}
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="cta-image d-none d-lg-block d-md-block">
                <img src="assets/img/cta-1-man.svg" width={200} className="img-left" alt="cta" />
                <img src="assets/img/cta-1-mike.svg" width={200} className="img-right" alt="cta" />
            </div>
        </section>
    )
}

export default Calltoaction;
