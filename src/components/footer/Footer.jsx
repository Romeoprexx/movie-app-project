import React from 'react';

import './footer.scss';

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/pixel.png';


const Footer = () => {
    return (
        <div className="footer" style={{backgroundImage: `url(${bg})`}}>
            <div className="footer__content container">
                <div className="footer__content__logo">
                    <div className="logo">
                        <Link to='/'>
                          <img src={logo} alt="" />
                        </Link>
                    </div>
                </div>
                <div className="footer__content__menus">
                    <div className="footer__content__menu">
                        <h3>The basics</h3>
                        <Link to="/">Home</Link>
                        <Link to="/">About us</Link>
                        <Link to="/">Contact us</Link>
                        <Link to="/">System status</Link>
                    </div>
                    <div className="footer__content__menu">
                        <h3>legal</h3>
                        <Link to="/">Term of Use</Link>
                        <Link to="/">FAQ</Link>
                        <Link to="/">Premium</Link>
                        <Link to="/">Pravacy policy</Link>
                    </div>
                    <div className="footer__content__menu">
                        <h3>get involved</h3>
                        <a href='https://www.themoviedb.org/movie/new'>Add New Movie</a>
                        <a href='https://www.themoviedb.org/tv/new'>Add New Tv Show</a>
                        <Link to="/">Recent release</Link>
                        <a href='https://www.buymeacoffee.com/romeowinchd'>Support us</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
