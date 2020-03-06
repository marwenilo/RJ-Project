import React from 'react';
import FooterWrapper from './footerWrapper';



const Header = () => {
  return (
    <FooterWrapper>

      <div className="footerHead">

        <div className="logo"><p className='logoRight'>right</p>
        <p className="logoJob">Job</p></div>
        <div className="footerList">
        <h4>For Job Seekers</h4>

          <ul>

            <li><a href='google.com'>Find Jobs</a></li>
            <li><a href='google.com'>Upload Resume</a></li>
            <li><a href='google.com'>Salary</a></li>
            <li><a href='google.com'>Mobile App</a></li>
            <li><a href='google.com'>Site Map</a></li>
            <li><a href='google.com'>Help</a></li>

          </ul>
        </div>
        <div className="footerList">
        <h4>For Employers</h4>
          <ul>
         
            <li><a href='google.com'>Search</a></li>
            <li><a href='google.com'>Resumes</a></li>
            <li><a href='google.com'>Site Map</a></li>
            <li><a href='google.com'>Help</a></li>
        
          </ul>
        </div>
        <div className="footerList">
        <h4>About Us</h4>
          <ul>
           
          
            <li><a href='google.com'>About Monster</a></li>
            <li><a href='google.com'>Work for Monster</a></li>
            <li><a href='google.com'> Partner with Us</a></li>
            <li><a href='google.com'>RightJob International</a></li>
            

          </ul>
        </div>
        <div className="footerList">
        <h4>Helpful Resources</h4>
          <ul>
           
         
            <li><a href='google.com'>Contact Us</a></li>
            <li><a href='google.com'>Terms of Use</a></li>
            <li><a href='google.com'>Privacy Center</a></li>
            <li><a href='google.com'>Security Center</a></li>
            <li><a href='google.com'>Accessibility Center</a></li>
            <li><a href='google.com'>AdChoices</a></li>

          </ul>
        </div>
        <div className="footerList">
        <h4>Find Jobs</h4>
          <ul>
            
          
            <li><a href='google.com'>US Jobs</a></li>
            <li><a href='google.com'>Canada Jobs</a></li>
            <li><a href='google.com'>UK Jobs</a></li>
            <li><a href='google.com'>Emplois en France</a></li>
            <li><a href='google.com'>Jobs in Deutschland</a></li>
            <li><a href='google.com'>Vacatures in Nederland</a></li>

          </ul>
        </div>
      </div>
      <div className="footerFoot">
        <h5>Find us on social media:</h5>
        <div className="images">
        <img src='/assets/images/facebook.svg' alt='facebook' />
        <img src='/assets/images/twitter.svg' alt='twitter'  />
        <img src='/assets/images/linkedin.svg' alt='linkedin'  />
        <img src='/assets/images/dribbble.svg' alt='dribbble' />
        </div>
      </div>
    </FooterWrapper>
  )
};

export default Header;
