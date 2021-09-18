import React from 'react';
import "./home.css";

const Home = () => {
    return (
        <div id="home_page_area">
            <div className="container">

                <div className="search_input">
                    <div className="input-group mb-3">
                        <input type="text" className="form-control shadow-sm" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <div className="input-group-append ml-3">
                            <button className="btn my-2 my-sm-0" type="submit"><i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
                <div className="img_gallery">
                    <div className="head_lines">
                        <h5>Random</h5>
                        <p>What is Lorem Ipsum?</p>
                    </div>
                    <div className="images row">
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluidd" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/FVBDKAt.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                        <div className="img col-xl-3 col-lg-3 col-md-4 col-sm-6">

                            <img src="https://i.imgur.com/Hp6fsbp.jpg" alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4 load_more_btn">
                    <button type="button" className="btn btn-dark">load more</button>
                </div>
            </div>
        </div>
    );
};

export default Home;