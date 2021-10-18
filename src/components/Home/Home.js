import React from 'react';
import Banner from './Banner/Banner';
import Costumar from './Costumar/Costumar';
import Specialities from './Specialities/Specialities';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Specialities></Specialities>
            <Costumar></Costumar>
        </div>
    );
};

export default Home;