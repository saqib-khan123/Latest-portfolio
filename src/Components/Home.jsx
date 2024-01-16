// import React from 'react'
import { Link } from 'react-router-dom';
import { FaArrowUp } from "react-icons/fa";

import styled from "styled-components";
import React, { useEffect, useState } from "react";


// import $ from 'jquery';
// import Waypoint from 'waypoint';
const Home = () => {

    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };

    const listenToScroll = () => {
        let heightToHidden = 10;
        const winScroll =
            document.body.scrollTop || document.documentElement.scrollTop;

        if (winScroll > heightToHidden) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", listenToScroll);
        return () => window.removeEventListener("scroll", listenToScroll);
    }, []);

    function scroll() {
        const aboutSection = document.getElementById('MyAbout');
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    function scroll22() {
        const reviewSection = document.getElementById('Myreview');
        reviewSection.scrollIntoView({ behavior: 'smooth' });
      }
    function scroll33() {
        const skillSection = document.getElementById('skill');
        skillSection.scrollIntoView({ behavior: 'smooth' });
      }
    function scroll44() {
        const contactSection = document.getElementById('contact');
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }

    return (
        <>
            <div className=''>

                <div className='container-fluid  image'>
                    {/* <div className='row'><Navbar /></div> */}
                    {/* # navbar #    */}

                    <div className='container-fluid p-5  '>
                        <nav className="navbar navbar-expand-lg navbar-dark main-cont main-navigation">
                            <div className="container-fluid ">
                                <a className="navbar-brand   name-brand2" href="#">Saqib Khan</a>
                                <button className="navbar-toggler buttomMargin" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className=" collapse navbar-collapse  my-ul-links" id="navbarSupportedContent" >
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ">
                                        <li className="nav-item ">
                                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active" onClick={scroll} aria-current="page" href="#">About</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" onClick={scroll22} aria-current="page" href="#">Experience</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" onClick={scroll33} aria-current="page" href="#">Skills</a>
                                        </li>

                                        <li className="nav-item">
                                            <a className="nav-link active" aria-current="page" onClick={scroll44} href="#">Contact</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* # navbar #    */}

                    <div className='row p-5 main-cont '>
                        <div className='col-md-12 col-sm-12 my-font-size text-light'>
                            <h2 className='my-font-size'>Software Developer. </h2>
                            <div className="text my-own-content  mt-4">
                                <h1 className='ani'>
                                    <span className='text-light fs-4 my-font-size my-own-content'>Responsibilities</span>
                                    <div className="message my-font-size">
                                        <div className="word my-font-size my-own-content"> Responsive</div>
                                        <div className="word2 my-font-size my-own-content">API Integration</div>
                                        <div className="word3 my-font-size my-own-content">Clean Code</div>
                                    </div>
                                </h1>
                            </div>
                            <p className='intro my-font-size'>I'm<span> Saqib </span> & Welcome  <br />To The Portfolio.</p>
                        </div>
                    </div>
                </div>
                {/* ============================================About section==================== */}


                <section id="MyAbout" className="about main-cont pt-4 p-5">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title my-title-11 text-start">
                            <h2 className='text-center '>About</h2>
                            <p className=''>Hello there!  Implemented and maintained front-end web applications, resulting in a 20% reduction in page load speeds and conversion rates by utilizing modern web technologies such as React.js and best practices for user experience and accessibility.
                            Developed and executed front-end development strategies, resulting in a 15% increase in website performance by implementing optimization techniques such as code minification and troubleshooting issues using browser developer tools
                            Worked with cross-functional teams to develop and execute on-time and on-budget projects and initiatives by effectively communicating project timelines, progress, and objectives using tools such as Slack and Zoom.
                            </p>
                            <h1>Responsibilities..</h1>
                            <ul>
                                <li>Developing and maintaining web applications that are optimized for various devices and browsers.</li>
                                <li>Implementing responsive design and cross-browser compatibility for different screen sizes.</li>
                                <li>Developing user-friendly and interactive web features such as buttons, forms, and menus.</li>
                                <li>Writing and maintaining code that is clean, efficient, and easy to understand.</li>
                                <li>Implementing responsive design and cross-browser compatibility for different screen sizesDeveloping user-friendly and interactive web features such as buttons, forms, menus and API integration.</li>
                                <li>Developing and maintaining web applications that are optimized for various devices and browsers.</li>
                           
                            </ul>
                        </div>
                        <div>
                        </div>
                        <div className="row">
                            <div className="col-4 my-image">
                                <img src="./images/myimage.jpeg" className="img-fluid" alt="Myimage" />
                            </div>
                            <div className="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Software Developer at Scriza Pvt Ltd.</h3>
                                <p className="fst-italic">
                                A Focused, flexible and enthusiastic professional who is looking forward to work in a Customer centric environment. And organized, detail – oriented and passionate engineer, who is able to accomplish multiple tasks atease, without compromising on quality.

                                 I Assure you can give my 100%. Thanks.
                                </p>
                                <div className="row">
                                
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Birthday:</strong> 28th May 2001</li>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Websites:</strong> https://github.com/saqib-khan123?tab=repositories</li>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Phone:</strong>  +91 9368098745</li>
                                            <li><i className="bi bi-rounded-right"></i> <strong>City:</strong> Noida </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Age:</strong>  24</li>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Degree:</strong>  Bachelor Of Application (BCA)</li>
                                            <li><i className="bi bi-rounded-right"></i> <strong>Email:</strong>  saqibpathan776@gmail.com</li>
                                        </ul>
                                    </div>
                                </div>
                                <p>                       
                                    Assisted in the development and maintenance of front-end web applications, resulting in a positive impact on the company's overall performance.
                                    Granted additional code review permissions after demonstrating strong attention to detail that led to a 25% decrease in code errors.
                                    Provided support to senior front-end developers after becoming proficient in AngularJS, resulting a in stronger, more efficient tech team.</p>
                            </div>
                        </div>

                    </div>
                </section>
                {/* <!-- End About Section --> */}

                {/* =======================================Reviews section======================== */}

                <section className='p-5 main-cont' id='Myreview' style={{marginTop:'-60px'}}>
                    <div className="section-title my-title-22">
                        <h2 className='text-center fw-bold pb-4'>Experience</h2>
                    </div>
                   <div className="main-div1">
                   <h2><b>Scriza Pvt Ltd</b></h2>
                   <p> Noida, UP </p>
                   <p><b>( Present )</b></p>
                    <h4> Software Developer.</h4>
                    <ul className='mt-3'>
                        <li> Writing and maintaining code that is clean, efficient, and easy to understand</li>
                        <li>Developing user-friendly and interactive web features such as buttons, forms, menus and API integration</li>
                        <li>mplementing responsive design and cross-browser compatibility for different screen sizes</li>
                        <li>Developing and maintaining web applications that are optimized for various devices and browsers</li>
                        <li>Clean and smooth also read to understand </li>
                        <li> Implementing responsive design and cross-browser compatibility for different screen sizes</li>
                    </ul>
                    <hr />
                     <h2><b>Scriza Pvt Ltd</b></h2>
                   <p> Noida, UP </p>
                   <p><b>( 06/2023  to 09/2023 )</b></p>
                   <h4> Internship In React js</h4>
                   <ul className='mt-3'>
                        <li>Developing and maintaining web applications that are optimized for various devices and browsers</li>
                        <li>Implementing responsive design and cross-browser compatibility for different screen sizes</li>
                        <li>Developing user-friendly and interactive web features such as buttons, forms, and menus</li>
                        <li>Developing and maintaining web applications that are optimized for various devices and browsers</li>
                        <li>API integration</li>
                        <li>Clean and smooth also read to understand </li>
                        <li> Implementing responsive design and cross-browser compatibility for different screen sizes</li>
                    </ul>
                   </div>

                


                </section>
                {/* ============================ Skills ============================ */}
                <section className='main-cont p-5' id='skill'>
                <div className='container-fluid '>
                <div className='row '>
                <div className="section-title my-title-33">
                            <h2 className='kk '>Skills</h2>
                            <p className=' pt-4'>Experienced in  few technical skills that are necessary for front end development:.</p>
                        </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="90" data-speed="1800">Html</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>
                   
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">Css</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800"><small>Bootstrap</small></span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">javaScript</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>


                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">React js</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>

                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">Redux js</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800">Oops</span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>
                    <div className='col-xl-3 col-lg-3 col-md-6 col-sm-6'>
                        <div className="progress d-flex justify-content-center">

                            <span className="title timer" data-from="0" data-to="85" data-speed="1800"><small>Git</small></span>
                            <div className="overlay"></div>
                            <div className="left"></div>
                            <div className="right"></div>
                        </div>


                    </div>

                </div>
                </div>

                </section>
               
     


                {/* ===========================================================Certificate========================= */}

                <section className='main-cont p-5' id='certificate'>
                    <div className='container-fluid '>
                        <div className='row '>
                            <div className="section-title my-title-44 my-section-title">
                                <h2 className='text-center mb-4 '>Certificates</h2>
                            </div>

                            <div className='col-md-12 ' style={{marginLeft:'22px'}}>
                                <p className=' pt-4'>Certificates within my portfolio showcase my commitment to continuous learning and mastery in various fields. Each certificate represents dedicated effort and proficiency attained in specialized areas. They serve as tangible proof of my expertise, validating skills honed through rigorous training and experience. These certifications not only highlight my qualifications but also signify a proactive approach towards personal and professional development. Each certificate stands as a testament to my dedication, knowledge, and ongoing pursuit of excellence.</p>

                            </div>
                            <div className='row justify-content-center dflexright'>

                                <div className=' col-xl-4 col-lg-4 col-md-6 col-sm-12  mb-4 pb-4 pt-4 '>
                                    <div className="card card-c ">
                                        <img className="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div className="card-c__content">
                                            <p className="card-c__title"><small>The 3 months Internship in React from Scriza Pvt Ltd.</small> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-4  pb-4 pt-4'>
                                    <div className="card card-c "><img className="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div className="card-c__content">
                                            <p className="card-c__title"><small>The participation in the Workshop on hardware And Application.</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 mb-3  pb-4 pt-4'>
                                    <div className="card card-c "><img className="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div className="card-c__content">
                                            <p className="card-c__title"><small>The participation in the as a captain in college team in tournament</small></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ============================Projects============== */}

                <section>
                    <div className=' container-fluid row p-5 pe-0 text-center main-cont' id='project'> 
                        <div className="section-title">
                            <h2>My Latest Project</h2>
                        </div>
                        <p>There are some my latest project which i build with my skills and I already mentioned above.</p>

                        <div className="row" style={{marginLeft:'25px'}}>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-project-card">
                            <div className='col-md-4 pt-5'>
                            <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">E-commerce web <span><small>(Reat js + Redux js)</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/React-Redux_project'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-project-card">
                            <div className='col-md-4 pt-5'>
                        <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">School ERP <br /> <span><small>( Reat js )</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/School_ERP'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-project-card">
 
                            <div className='col-md-4 pt-5'>
                        <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">Restraunt website <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://restraunt-web.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                            </div>
                        </div>

                       

                     <div className="row" style={{marginLeft:'25px'}}>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-pddn-class my-project-card">
                        <div className='col-md-4 pt-5'>
                        <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">E-commerce website  <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://e-commer-webb.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-project-card">
 
                        <div className='col-md-4 pt-5'>
                        <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">Travel website  <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://traveller-webb.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        </div>
                        <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12 my-project-card">
                        <div className='col-md-4 pt-5'>
                        <div className="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p className="card-c__titl fs-5">Basic html, css project <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/Html_css_live_pro'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        </div>
                     </div>
                      
                   

                       
                      
                    </div>
                </section>









                {/* ================================= contact me Hire me============== */}

                <section className='main-cont p-5' id='contact'>
                    <div className='container-fluid '>


                        <div className='row '>
                            <div className="section-title">
                                <h2 className='fw-bold pb-4 text-center mb-4' id='font-size'>Contact Us.</h2>
                            </div>

                            <div className='col-md-6 form-p '>

                                <p>I am available for work. Connect with me via phone: 09368098745 or email: saqibpathan776@gmail.com</p>

                                <input type='text' className='form-control mb-3' placeholder='Your Name' />
                                <input type='text' className='form-control mb-3' placeholder='Your Email' />
                                <input type='text' className='form-control mb-3' placeholder='Phone Number' />
                                <input type='text' className='form-control mb-3' placeholder='Subject' />
                                <textarea type='textarea' className='form-control mb-3' placeholder='Your Name' />

                                <button className='button-design'> SUBMIT NOW
                                </button>

                            </div>
                    
                            <div className="col-lg-6">
                                <img className='contact-img img-fluid' src="./images/about-6.jpg"  alt="" />
                            </div>

                        </div>

                    </div>
                </section>













                {/* ======================================preloader================ */}

                <Wrapper>
                    {isVisible && (
                        <div className="top-btn" onClick={goToBtn}>
                            <FaArrowUp className="top-btn--icon" />
                         

                        </div>
                    )}
                </Wrapper>

                {/* ==============================Progressbar================ */}





                {/* ==============================footer======================== */}
                <footer>
                    <div className="social">
                        <p>Follow me on social media</p>
                        <ul className="wrapper">
                            <a href="#" target="_blank">
                                <li className="icon linkedin">
                                    <span className="tooltip">LinkedIn</span>
                                    <span><i className="fab fa-linkedin"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className="icon github">
                                    <span className="tooltip">GitHub</span>
                                    <span><i className="fab fa-github"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className="icon facebook">
                                    <span className="tooltip">Facebook</span>
                                    <span><i className="fab fa-facebook-f"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className="icon instagram">
                                    <span className="tooltip">Instagram</span>
                                    <span><i className="fab fa-instagram"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li className="icon twitter">
                                    <span className="tooltip">Twitter</span>
                                    <span><i className="fab fa-twitter"></i></span>
                                </li>
                            </a>

                        </ul>
                    </div>
                    <div className="final_text"></div>
                    <p>Copyright &copy; All rights reserved
                        <br />Designed By Saqib khan, 2023
                    </p>
                </footer>
            </div>
        </>
    )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .top-btn {
    font-size: 2.4rem;
    width: 4rem;
    height: 4rem;
    color: #fff;
    opacity: 0.9 ;
    
    background-color: ${({ theme }) => theme.colors?.btn || '#FF0072'};

    box-shadow: ${({ theme }) => theme.colors?.shadow || 'defaultShadowValue'};

    border-radius: 50%;
    position: fixed;
    bottom: 5rem;
    right: 5rem;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &--icon {
      animation: gototop 1.2s linear infinite alternate-reverse;
    }

    @keyframes gototop {
      0% {
        transform: translateY(-0.5rem);
      }
      100% {
        transform: translateY(1rem);
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.media?.mobile || '#08a4c0'}) {
  /* Styles for mobile */


    .top-btn {
      right: 0;
      left: 40%;
    }
  }
`;

export default Home;
