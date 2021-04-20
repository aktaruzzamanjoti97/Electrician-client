import React from 'react';
import Advertisement from '../Advertisement/Advertisement';
import Footer from '../../Shared/Footer/Footer';
import HeaderMain from '../HeaderMain/HeaderMain';
import Navbar from '../../Shared/Navbar/Navbar';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Header = () => {
    return (
        <div className="header">
            <Navbar />
            <HeaderMain />
            <Service />
            <Advertisement />
            <Testimonials />
            <Footer />
        </div>
    );
};

export default Header;