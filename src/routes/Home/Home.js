import React from 'react';

import Header from './components/Header/Header';
import IconPacks from './components/IconPacks/IconPacks';
import CTASection from './components/CTASection/CTASection';
import IconShowcase from './components/IconShowcase/IconShowcase';
import Explore from './components/Explore/Explore';

const Home = () => {
    return (
        <div>
           <Header/>
           <IconPacks/>
           <CTASection/>
           <IconShowcase/>
           <Explore/>
        </div>
    );
};

export default Home;
