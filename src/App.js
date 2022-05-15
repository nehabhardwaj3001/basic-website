import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">

      <div className='page-1'>
        <div className='navbar'>
          <div className="navigation-menu">
            <a href="#" className='nav'><h1>Serenity</h1></a>
          </div>
          <div className='links'>
            <a href="/#" className='nav-1'>Welcome</a>
            <a href="#" className='nav-2'>About</a>
            <a href="#" className='nav-3'>Services</a>
            <a href="#" className='nav-4'>Team</a>
            <a href="#" className='nav-5'>Blog</a>
            <a href="#" className='nav-6'>Contact</a>
          </div>
        </div>
      <div className='header'>
        <h1 className='heading1'> LAUNCH.YOUR.WEBSITE </h1>
        <h2 className='heading2'>Simple & Elegent One-Page WordPress Theme</h2><br></br>
        <p>An elegent, easy-to-use, one-page WordPress theme for professional and businesses.</p>
        <p>Perfect to promote your projects, products or services.</p><br></br>
        <button className='learn-more'>Learn More</button>
        <button className='download-now'>Download Now</button>
      </div>
      </div>

      <div className='main-features'>
        <h2 className='heading'>Main Features</h2>
        <h3 className='light'>Sed fermentum, felis ut cursus various, purus velit placerat tortor, at faucibus elit purus posuere velit. Integer sit amet felis ligula.</h3>
        <div className='cards1'>
          <div className='card-1'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/feature1-1.png' alt="c1" />
            <h4>Launch Your Business</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='card-2'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/feature2.png' alt="c2" />
            <h4>Easy Customization</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='card-3'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/feature3.png' alt="c3" />
            <h4>Loved By Many</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
        </div>
      </div>

      <div className='about-us'>
        <h1 className='heading'>About Us</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <p className='about'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
        <br /> The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. 
        <br />Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose injected humour and the like</p>
      </div>

      <div className='team-members'>
      <h1 className='heading'>Team Members</h1>
      <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
      <div className='cards2'>
          <div className='tm-1'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/team1.jpg' alt="tm-1" style={{width:"100%"}} />
            <h4>Hans Desjarlais</h4>
            <p>FOUNDER & CEO</p>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='tm-2'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/team2.jpg' alt="tm-2" style={{width:"100%"}}/>
            <h4>Janelle Brandon</h4>
            <p>MARKETING DIRECTOR</p>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='tm-3'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/team3.jpg' alt="tm-3" style={{width:"100%"}} />
            <h4>Eric Kelly</h4>
            <p>SENIOR PROGRAMMER</p>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
        </div>
      </div>

      <div className='testimonials'>
        <h1 className='heading' style={{color: "#FFFFFF"}}>Testimonials</h1>
        <p className='light' style={{color: "#FFFFFF"}}>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <div className='cards3'>
          <div className='tc-1'> 
            <p> "An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='tc-1'>
            <p>"An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
          <div className='tc-1'>
            <p>"An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
          </div>
        </div>
      </div>

      <div className='our-services'>
        <h1 className='heading'>Our Services</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <br />
        <br />
        <p className='service'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
        <p className='service'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        <div className='cards4'>
          <div className='os-1'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/service1.jpg' alt="os-1" style={{width:"100%"}} />
            <h4>Digital Marketing</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
          <div className='os-2'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/service2.jpg' alt="os-2" style={{width:"100%"}} />
            <h4>Janelle Brandon</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
          <div className='os-3'>
            <img src='https://demo.themely.com/serenity/wp-content/uploads/2019/04/service3.jpg' alt="os-3" style={{width:"100%"}} />
            <h4>Eric Kelly</h4>
            <p> An enim nullam tempor gravida donec enim ipsum blandit porta justo integer odio velna vitae auctor integer</p>
            <button className='learn-more2'>Learn More</button>
          </div>
        </div>
      </div>

      <div className='photo-gallary'>
        <h1 className='heading'>Photo Gallary</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p><br/><br />
        <div className="row"> 
          <div className="column">
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery10.jpg' alt='photo-1' style={{width:"100%"}} />
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery2.jpg' alt='photo-2' style={{width:"100%"}} /> 
          </div>
          <div className="column">
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery8.jpg' alt='photo-3' style={{width:"100%"}} />
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery9.jpg' alt='photo-4' style={{width:"100%"}} /> 
          </div>
          <div className="column">
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery5.jpg' alt='photo-5' style={{width:"100%"}} />
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/gallery11.jpg' alt='photo-6' style={{width:"100%"}} /> 
          </div>
         </div>
      </div>

      <div className='trusted-brands'>
        <h1 className='heading'>Trusted Brands</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <div className='cards5'>
          <div className='tb-1'>
            <h1>Start Growing Today</h1>
            <p>Sed fermentum, feils ut cursus varius, purus velit.</p>
          </div>
          <div className='tb-2'>
            <p>Want to learn more?</p>
            <button className='download-now'>Download Now→</button>
          </div>
        </div>
      </div>

      <div className='latest-news'>
        <h1 className='heading'>Latest News</h1>
        <p className='light'>Sed fermentum, feils ut cursus varius, purus velit placerat tortor, at faycibus elit purus posuere velit. Integer sit amet felis ligula.</p>
        <div className='cards6'>
          <div className='ln-1'>
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/post-thumbnail3-1000x600.jpg' alt="ln-1"  style={{width:"100%"}}/>
            <p className='blue'>ADVICE</p>
            <p>Prepping For Client Work And Meetings</p>
          </div>
          <div className='ln-2'>
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/post-thumbnail2-1000x600.jpg' alt="ln-2"  style={{width:"100%"}} />
            <p className='blue'>OPINION</p>            
            <p>Just Some Light Reading Material</p>
          </div>
          <div className='ln-3'>
            <img src='https://demo.themely.com/serenity-lite/wp-content/uploads/2019/04/post-thumbnail1-1000x600.jpg' alt="ln-3"  style={{width:"100%"}}/>
            <p className='blue'>NEWS</p>            
            <p>Becoming An Expert In Your Field</p>
          </div>
        </div>
        <button className='blog-btn'>Read the blog</button>
      </div>
      <div className='subscribe'>
        <div className='s-1'><h1 className='heading'>Subscribe</h1></div>
          <div className='s-2'>
          <p className='light'>Semoer lacus cursus porta, feyght primi uttrice risus auctor. </p>
          </div>
          <div className='s-3'>
          <input className='input-mail' placeholder='Enter your mail'/>
          <button className='signup-btn'>Signup</button>
          </div>
      </div>
    </div>
  );
}

export default App;
