import React from 'react'

const Navbar = () => {
    return (
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
                                    <a class="nav-link active" aria-current="page" href="/contact">About</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Experience</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Services</a>
                                </li>

                                <li class="nav-item">
                                    <a class="nav-link active" aria-current="page" href="#">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
    )
}

export default Navbar
