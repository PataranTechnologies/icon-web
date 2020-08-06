import React from 'react';

import Header from './components/Header/Header';
import IconPacks from './components/IconPacks/IconPacks';
import CTASection from './components/CTASection/CTASection';
import IconShowcase from './components/IconShowcase/IconShowcase';
import Explore from './components/Explore/Explore';
import chatBotIcon from "../../assets/chatbot.svg";
import styles from "./Home.module.css";

const Home = () => {
    return (
        <div className={styles.homeWrapper}>
           <Header/>
           <IconPacks/>
           <CTASection/>
           <IconShowcase/>
           <Explore/>
           <div className={styles.chatBotContainer}><img src={chatBotIcon} alt="Invoke Chatbot" className={styles.chatBot}/></div>
        </div>
    );
};

export default Home;
