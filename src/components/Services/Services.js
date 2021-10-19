import React from 'react';
import Costumar from '../Home/Costumar/Costumar';
import CardServices from '../Home/Services/CardServices/CardServices';
import Price from './Price/Price';
import ServicesPage from './ServicesPage/ServicesPage';

const Services = () => {
    return (
        <div>
            <ServicesPage></ServicesPage>
            <Price></Price>
            <CardServices></CardServices>
           <Costumar></Costumar>
        </div>
    );
};

export default Services;