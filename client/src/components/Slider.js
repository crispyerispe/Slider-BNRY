import React, { Fragment } from 'react';
import P1 from '../images/P1.jpg';
import P2 from '../images/P2.jpg';
import P3 from '../images/P3.jpg';
import P4 from '../images/P4.jpg';
import P5 from '../images/P5.jpg';

const Slider = () => {
    return (
        <Fragment>
            <div id="slider" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#slider" data-slide-to="0" className="active"></li>
                    <li data-target="#slider" data-slide-to="1"></li>
                    <li data-target="#slider" data-slide-to="2"></li>
                    <li data-target="#slider" data-slide-to="3"></li>
                    <li data-target="#slider" data-slide-to="4"></li>

                </ul>
                <div className="carousel-inner">
                    <div
                    className="carousel-item active"
                    style={{ backgroundImage: `url(${P1})` }}
                    >
                        <h1>Baby Blessing With The Girls</h1>
                    </div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P2})` }}
                    ></div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P3})` }}
                    ></div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P4})` }}
                    ></div>
                    <div
                    className="carousel-item"
                    style={{ backgroundImage: `url(${P5})` }}
                    ></div>
                </div>

                <a className="carousel-control-prev" href="#slider" data-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#slider" data-slide="next">
                <span className="carousel-control-next-icon"></span>
                </a>
            </div>
          
        </Fragment>
    )
}

export default Slider;
