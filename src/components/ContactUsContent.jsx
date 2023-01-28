import React, { useState } from 'react'
import Loader from './Loader';
import config from 'react-global-configuration';


const AlertComponent = props => {
    return (
        <div className={'alert alert-' + props.type} role="alert">
            <p className="text-center"><b>{props.message}</b></p>
        </div>
    )
}



const ContactUsContent = () => {

    const accessObject = {
        loaderflag: false,
        showAlert: false,
        responseMessage: '',
        alertType: ''
    }

    const [name, setName] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');
    const [contact, setContact] = useState('');
    const [accessState, SetAccessState] = useState(accessObject);



    const submitHnadle = event => {
        event.preventDefault();
        SetAccessState({ ...accessState, loaderflag: true });
        let formData = new FormData();
        formData.append('name', name); formData.append('email', email);
        formData.append('message', message); formData.append('contact', contact);
        fetch(`${config.get('api_url')}/contactus`, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
            .then(data => {
                debugger
                SetAccessState({ ...accessState, loaderflag: false });
                if (data.status == 'T') {
                    SetAccessState({ ...accessState, alertType: 'success' });
                } else {
                    SetAccessState({ ...accessState, alertType: 'danger' });
                }
                SetAccessState({ ...accessState, loaderflag: false, showAlert: true, responseMessage: data.message })
            });
    }

    if (accessState.loaderflag == true) return <Loader />

    return (
        <React.Fragment>
            <section className="contact-us-promo pt-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-mobile icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Call Us</h5>
                                        <p className="text-muted mb-0">+91 9967313968</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-location-pin icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Visit Us</h5>
                                        <p className="text-muted mb-0">Mumbai, Maharastra</p></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="card single-promo-card single-promo-hover text-center shadow-sm">
                                <div className="card-body py-5">
                                    <div className="pb-2">
                                        <span className="ti-email icon-sm color-secondary" />
                                    </div>
                                    <div><h5 className="mb-0">Mail Us</h5>
                                        <p className="text-muted mb-0">dhyeyrathod111@gmail.com</p></div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section className="contact-us-section ptb-100">
                <div className="container contact">
                    <div className="col-12 pb-3 message-box d-none">
                        <div className="alert alert-danger" />
                    </div>
                    <div className="row justify-content-around">
                        <div className="col-md-12">
                            <div className="contact-us-form gray-light-bg rounded p-5">
                                {accessState.showAlert ? <AlertComponent type="success" message={accessState.responseMessage} /> : ''}
                                <h4 className="text-center">Ready to get started?</h4>
                                <form action="#" method="POST" id="contactForm" className="contact-us-form" noValidate="true">
                                    <div className="form-row">
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" value={name} className="form-control" name="name" id="name" onChange={event => setName(event.target.value)} placeholder="Enter name" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="email" value={email} className="form-control" name="email" id="email" onChange={event => setemail(event.target.value)} placeholder="Enter email" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <input type="text" value={contact} className="form-control" name="contact" onChange={event => setContact(event.target.value)} placeholder="Enter Contact" required="required" />
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea name="message" id="message" className="form-control" rows={7} cols={25} placeholder="Message" value={message} onChange={event => setmessage(event.target.value)} />
                                            </div>
                                        </div>
                                        <div className="col-sm-12 mt-3">
                                            <button type="submit" onClick={submitHnadle} className="btn secondary-solid-btn disabled" id="btnContactUs" style={{ cursor: 'pointer' }}>
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default ContactUsContent;
