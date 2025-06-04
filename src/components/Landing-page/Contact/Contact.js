import React from 'react';
import './Contact.css';
import icon from '../../../images/about-icon-03.png';

const Contact = () => {
  return (
    <section id="Contact">
      <div className="Container">
        <div className="row d-flex justify-content-center my-4">
          <h2>We're happy to hear from you</h2>
        </div>
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12 ml-5">
            <form>
              <div className="form-group">
                <label htmlFor="FormControlInput1">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="FormControlInput1"
                  placeholder="Jhon Doe"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="FormControlInput2">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="FormControlInput2"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlSelect1">How did you find us?</label>
                <select className="form-control" id="exampleFormControlSelect1" defaultValue="Search">
                  <option value="friends">Friends</option>
                  <option value="family">Family</option>
                  <option value="Search">Search Engine</option>
                  <option value="ad">Advertisement</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  id="FormControlTextarea1"
                  rows="1"
                  placeholder="Drop us a line"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>

          <div className="col-lg-6 col-md-12 col-sm-12 mobile-top-fix ml-5">
            <div className="my-4">
              <img src={icon} alt="icon" />
              <h6 className="my-3">Say hello</h6>
              <h2 className="text-primary">
                Get in touch, send us an e-mail or call us
              </h2>
            </div>
            <p>
              Our Vision is to - <strong className="text-dark">Fight Galactic Unemployment</strong>{' '}
            </p>
            <p>
              Questions? Enquiries? Suggestions? Existential doubts? Our teams are ready to hear
              about them!
            </p>
            <h5>Contact us now</h5>
            <h4 className="text-info">Email: resumebuilder@gmail.com</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
