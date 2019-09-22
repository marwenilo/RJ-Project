import React from 'react';
import HomeWrapper from './HomeWrapper';

const Home = () => (
  <HomeWrapper>
    <div className="homeContainer">
    <div className="intro">
      <h1>Who we are ?</h1>
      <div className="introDescri">
      <p>If you want to avoid spam, scams, and duplicate job listings,
      <strong className='logoRight'>righ</strong>
      <strong className='logoJob'>Job</strong>
      is the job site for you.
      <strong className='logoRight'>righ</strong>
      <strong className='logoJob'>Job</strong>
      only posts jobs provided on company websites, furnishing applicants with often unadvertised jobs. Because the jobs come directly from company sites, you can be sure they are current openings.</p>
    </div>

    </div>
    <div className="intro aaa">
      <h1>Always Growing</h1>
      <div className="introDescri">
      <p>
        <strong className='logoRight'>righ</strong>
      <strong className='logoJob'>Job</strong> 
      is the expert in matching jobs seekers with company using machine learning to know which skills are related </p>
  
    </div>
    <div className="cardContainer">
    <div className="card">
        <h3 className="title">ANNUAL APPLICATIONS</h3>
         <h4 className="number">6,000,000</h4>
                            
                        </div>
                        <div className="card">
        <h3 className="title">SEARCHABLE CANDIDATES</h3>
         <h4 className="number">64,000,000</h4>
                            
                        </div>
                           <div className="card">
        <h3 className="title">SEARCHABLE rightJob RESUMES</h3>
         <h4 className="number">2,700,000</h4>
                            
                        </div>
                           <div className="card">
        <h3 className="title">UNIQUE MONTHLY VISITORS</h3>
         <h4 className="number">1,500,000</h4>
                            
                        </div>
     </div>
    </div>
    <div className='hiringContainer'>
    <div className='hiring'>
<h1>Who's Hiring </h1>
<div className='hiringImg'>
        <img src='/assets/images/adidas.png' alt='facebook' />
        <img src='/assets/images/ooredoo.png' alt='ooredoo'  />
        <img src='/assets/images/oyez.jpg' alt='oyez'  />
        <img src='/assets/images/samsung.png' alt='samsung' />
        <img src='/assets/images/orange.png' alt='orange' />
        <img src='/assets/images/biat.png' alt='biat' />
        <hr/>
</div>

    </div>
    </div>
    <div className='storyContainer'>
      <h1>Success Stories</h1>
    <div className='stories'>
      
<div className='story'>
 <img src='/assets/images/prs1.jpg' alt='person' />
<h2>Salma Hayek</h2>
<h4>Software Engineer</h4>
<h3>Finding a new job is tedious and stressful. Working with rightJob meant multiple companies that were a good fit were looking to hire me.</h3>

</div>
<div className='story'>
 <img src='/assets/images/pers2.jpg' alt='person' />
<h2>Brad Pitt</h2>
<h4>Senior UX Designer</h4>
<h3>With rightJob, companies were highly responsive and moved through the process very quickly. I never had to wait more than a couple days to hear back from anyone.</h3>

</div>
<div className='story'>
 <img src='/assets/images/pers3.jpg' alt='person' />
<h2>Aaza Labyedh</h2>
<h4>Accountant</h4>
<h3>I can do everything on my own schedule. From picking out interview time slots to selecting only the companies I want to interview with, this is what recruiting should look like.</h3>

</div>




</div>

    </div>
    
    
    </div>
   
   
  </HomeWrapper>
);
export default Home;
