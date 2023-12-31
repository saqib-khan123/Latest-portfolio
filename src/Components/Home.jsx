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
                        <nav class="navbar navbar-expand-lg navbar-dark main-cont">
                            <div class="container-fluid">
                                <a class="navbar-brand name-brand name-brand2" href="#">Saqib Khan</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="  " id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" onClick={scroll} aria-current="page" href="#">About</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link active" onClick={scroll22} aria-current="page" href="#">Review</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link active" onClick={scroll33} aria-current="page" href="#">Skills</a>
                                        </li>

                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" onClick={scroll44} href="#">Contact</a>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* # navbar #    */}

                    <div className='row p-5 main-cont'>
                        <div className='col-md-12 text-light'>
                            <h2 className=''>Software Developer. </h2>
                            <div class="text  mt-4">
                                <h1 className='ani'>
                                    <span className='text-light fs-4'>Responsibilities</span>
                                    <div class="message">
                                        <div class="word"> Responsive</div>
                                        <div class="word2">API Integration</div>
                                        <div class="word3">Clean Code</div>
                                    </div>
                                </h1>
                            </div>
                            <p className='intro'>I'm<span> Saqib</span> Welcome  <br />To The Portfolio.</p>
                        </div>
                    </div>
                </div>
                {/* ============================================About section==================== */}


                <section id="MyAbout" class="about main-cont pt-4 p-5">
                    <div class="container" data-aos="fade-up">

                        <div class="section-title text-start">
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
                        <div class="row">
                            <div class="col-4 my-image">
                                <img src="./images/myimage.jpeg" class="img-fluid" alt="Myimage" />
                            </div>
                            <div class="col-lg-8 pt-4 pt-lg-0 content">
                                <h3>Software Developer at Scriza Pvt Ltd.</h3>
                                <p class="fst-italic">
                                A Focused, flexible and enthusiastic professional who is looking forward to work in a Customer centric environment. And organized, detail – oriented and passionate engineer, who is able to accomplish multiple tasks atease, without compromising on quality.

                                 I Assure you can give my 100%. Thanks.
                                </p>
                                <div class="row">
                                
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Birthday:</strong> 28th May 2001</li>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Websites:</strong> https://github.com/saqib-khan123?tab=repositories</li>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Phone:</strong>  +91 9368098745</li>
                                            <li><i class="bi bi-rounded-right"></i> <strong>City:</strong> Noida </li>
                                        </ul>
                                    </div>
                                    <div class="col-lg-6">
                                        <ul>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Age:</strong>  24</li>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Degree:</strong>  Bachelor Of Application (BCA)</li>
                                            <li><i class="bi bi-rounded-right"></i> <strong>Email:</strong>  saqibpathan776@gmail.com</li>
                                            {/* <li><i class="bi bi-rounded-right"></i> <strong>Freelance:</strong> Available</li> */}
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

                <section className='p-5 main-cont' id='Myreview'>
                    <div class="section-title">
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

                    {/* <div className='row'>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review1.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review2.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review3.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review4.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review5.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>
                        <div className='col-md-6 mb-3 '>
                            <div class="card">
                                <img src="./images/review6.png" class="card-img-top" alt="..." height={150} />

                            </div>

                        </div>




                    </div> */}


                </section>
                {/* ============================ Skills ============================ */}
                <section className='main-cont p-5' id='skill'>
                <div className='container-fluid '>
                <div className='row '>
                <div class="section-title ">
                            <h2 className='kk '>Skills</h2>
                            <p className=' pt-4'>Experienced in  few technical skills that are necessary for front end development:.</p>
                        </div>
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="90" data-speed="1800">Html</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>
                   
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800">Css</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800"><small>Bootstrap</small></span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800">javaScript</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>


                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800">React js</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>

                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800">Redux js</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800">Oops</span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>
                    <div className='col-md-3'>
                        <div class="progress d-flex justify-content-center">

                            <span class="title timer" data-from="0" data-to="85" data-speed="1800"><small>Git & GitHub</small></span>
                            <div class="overlay"></div>
                            <div class="left"></div>
                            <div class="right"></div>
                        </div>


                    </div>

                </div>
                </div>

                </section>
               
     


                {/* ===========================================================Certificate========================= */}

                <section className='main-cont p-5' id='certificate'>
                    <div className='container-fluid '>
                        <div className='row '>
                            <div class="section-title">
                                <h2 className='text-center mb-4 '>Certificates</h2>
                            </div>

                            <div className='col-md-12 '>
                                <p className=' pt-4'>Certificates within my portfolio showcase my commitment to continuous learning and mastery in various fields. Each certificate represents dedicated effort and proficiency attained in specialized areas. They serve as tangible proof of my expertise, validating skills honed through rigorous training and experience. These certifications not only highlight my qualifications but also signify a proactive approach towards personal and professional development. Each certificate stands as a testament to my dedication, knowledge, and ongoing pursuit of excellence.</p>

                            </div>
                            <div className='d-flex justify-content-center dflexright'>

                                <div className='col-md-4 mb-4 pb-4 pt-4'>
                                    <div class="card card-c ">
                                        <img class="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div class="card-c__content">
                                            <p class="card-c__title"><small>The 3 months Internship in React from Scriza Pvt Ltd.</small> </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-4  pb-4 pt-4'>
                                    <div class="card card-c "><img class="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div class="card-c__content">
                                            <p class="card-c__title"><small>The participation in the Workshop on hardware And Application.</small></p>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3  pb-4 pt-4'>
                                    <div class="card card-c "><img class="img-fluid imag-size img-cls" src="./images/Beige Gold Floral Border Certificate Of Appreciation.png" alt="About Images" />

                                        <div class="card-c__content">
                                            <p class="card-c__title"><small>The participation in the as a captain in college team in tournament</small></p>
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </section>


                {/* ============================Projects============== */}

                <section>
                    <div className=' container-fluid row p-5 text-center main-cont' id='project'> 
                        <div class="section-title">
                            <h2>My Latest Project</h2>
                        </div>

                        <p>There are some my latest project which i build with my skills and I already mentioned above.</p>
                        <div className='col-md-4 pt-5'>
                            <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">E-commerce web <span><small>(Reat js + Redux js)</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/React-Redux_project'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                        <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">School ERP <br /> <span><small>( Reat js )</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/School_ERP'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                        <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">Restraunt website <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://restraunt-web.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                        <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">E-commerce website  <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://e-commer-webb.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                        <div className='col-md-4 pt-5'>
                        <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">Travel website  <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://traveller-webb.netlify.app'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>

                        <div className='col-md-4 pt-5'>
                        <div class="card card-pp my-link">
                                <div className='position-absolute top-50 start-50 translate-middle'>
                                    <p class="card-c__titl fs-5">Basic html, css project <span><small>(Html,css, bootstrap & js)</small></span></p>
                                    <Link to='https://github.com/saqib-khan123/Html_css_live_pro'>Go & Check out</Link>

                                </div>

                            </div>
                        </div>
                      
                    </div>
                </section>









                {/* ================================= contact me Hire me============== */}

                <section className='main-cont p-5' id='contact'>
                    <div className='container-fluid '>


                        <div className='row '>
                            <div class="section-title">
                                <h2 className='fw-bold pb-4 text-center mb-4'>Contact Us.</h2>
                            </div>

                            <div className='col-md-6 form-p '>

                                <p>I am available for freelance work. Connect with me via phone: 01923 088574 or email: admin@example.com</p>

                                <input type='text' className='form-control mb-3' placeholder='Your Name' />
                                <input type='text' className='form-control mb-3' placeholder='Your Email' />
                                <input type='text' className='form-control mb-3' placeholder='Phone Number' />
                                <input type='text' className='form-control mb-3' placeholder='Subject' />
                                <textarea type='textarea' className='form-control mb-3' placeholder='Your Name' />

                                <button> SUBMIT NOW
                                </button>

                            </div>
                            {/* <div className='col-md-6'>
                            <img class="w-100 imag-size" src="./images/about-6.jpg" alt="About Images" />



                        </div> */}
                            <div class="col-lg-6">
                                <img className='contact-img' src="./images/about-6.jpg" class="img-fluid" alt="" />
                            </div>

                        </div>

                    </div>
                </section>













                {/* ======================================preloader================ */}

                <Wrapper>
                    {isVisible && (
                        <div className="top-btn" onClick={goToBtn}>
                            <FaArrowUp className="top-btn--icon" />
                            {/* <div className="top-btn--icon">
                            <svg   xmlns="http://www.w3.org/2000/svg" height="24" width="12" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>
                            
                            </div> */}

                        </div>
                    )}
                </Wrapper>

                {/* ==============================Progressbar================ */}





                {/* ==============================footer======================== */}
                <footer>
                    <div class="social">
                        <p>Follow me on social media</p>
                        <ul class="wrapper">
                            <a href="#" target="_blank">
                                <li class="icon linkedin">
                                    <span class="tooltip">LinkedIn</span>
                                    <span><i class="fab fa-linkedin"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li class="icon github">
                                    <span class="tooltip">GitHub</span>
                                    <span><i class="fab fa-github"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li class="icon facebook">
                                    <span class="tooltip">Facebook</span>
                                    <span><i class="fab fa-facebook-f"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li class="icon instagram">
                                    <span class="tooltip">Instagram</span>
                                    <span><i class="fab fa-instagram"></i></span>
                                </li>
                            </a>
                            <a href="#" target="_blank">
                                <li class="icon twitter">
                                    <span class="tooltip">Twitter</span>
                                    <span><i class="fab fa-twitter"></i></span>
                                </li>
                            </a>

                        </ul>
                    </div>
                    <div class="final_text"></div>
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
