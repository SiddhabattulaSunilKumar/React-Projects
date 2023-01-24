import React from 'react';
import FoodContent from './Body/FoodContent';
import Header from './Header/Header';

const Home = (props) => {
    return (
        <div>
            <Header/>
            <FoodContent/>
        </div>
    );
};

export default Home;