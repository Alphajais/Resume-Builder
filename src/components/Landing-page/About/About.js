import React from 'react';
import './About.css';
import aboutImage from '../../../images/left-image.png';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="section my-5" id="About">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12">
            <img
              src={aboutImage}
              className="rounded img-fluid d-block mx-auto"
              alt="about-image"
            />
          </div>
          <div className="right-text col-lg-6 col-md-12 col-sm-12 mobile-top-fix pl-5">
            <div className="left-heading">
              <h2>Take your application to the next level</h2>
            </div>
            <div className="left-text">
              <p>
                Want even more tools for your job application? Register for a
                low-cost Premium account so you can produce multiple resumes
                online, have access to more design features, or create a longer
                curriculum vitae (CV). You can even test the Premium features
                first for free.
              </p>
              <p>
                Want an amazing cover letter to pair with your resume? Use one
                of our cover letter templates to create the total package for
                impressing employers. Your resume and cover letter will have the
                same design and fonts, making them the ideal match.
              </p>
              <button className="main-button mt-3">
                <Link to="/">Discover More</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
