import React from 'react';
import Price from '../Services/Price/Price';
import Banner from './Banner/Banner';
import Costumar from './Costumar/Costumar';
import Doctor from './Doctor/Doctor';
import Services from './Services/Services';
import Specialities from './Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specialities></Specialities>
            <Services></Services>
            <Doctor></Doctor>
            <Price></Price>
        </div>
    );
};

export default Home;