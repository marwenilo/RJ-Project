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

            <li><a href='#'>Find Jobs</a></li>
            <li><a href='#'>Upload Resume</a></li>
            <li><a href='#'>Salary</a></li>
            <li><a href='#'>Mobile App</a></li>
            <li><a href='#'>Site Map</a></li>
            <li><a href='#'>Help</a></li>

          </ul>
        </div>
        <div className="footerList">
        <h4>For Employers</h4>
          <ul>
         
            <li><a href='#'>Search</a></li>
            <li><a href='#'>Resumes</a></li>
            <li><a href='#'>Site Map</a></li>
            <li><a href='#'>Help</a></li>
        
          </ul>
        </div>
        <div className="footerList">
        <h4>About Us</h4>
          <ul>
           
          
            <li><a href='#'>About Monster</a></li>
            <li><a href='#'>Work for Monster</a></li>
            <li><a href='#'> Partner with Us</a></li>
            <li><a href='#'>RightJob International</a></li>
            

          </ul>
        </div>
        <div className="footerList">
        <h4>Helpful Resources</h4>
          <ul>
           
         
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Terms of Use</a></li>
            <li><a href='#'>Privacy Center</a></li>
            <li><a href='#'>Security Center</a></li>
            <li><a href='#'>Accessibility Center</a></li>
            <li><a href='#'>AdChoices</a></li>

          </ul>
        </div>
        <div className="footerList">
        <h4>Find Jobs</h4>
          <ul>
            
          
            <li><a href='#'>US Jobs</a></li>
            <li><a href='#'>Canada Jobs</a></li>
            <li><a href='#'>UK Jobs</a></li>
            <li><a href='#'>Emplois en France</a></li>
            <li><a href='#'>Jobs in Deutschland</a></li>
            <li><a href='#'>Vacatures in Nederland</a></li>

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
