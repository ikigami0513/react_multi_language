import React from 'react';
import traductions from '../../assets/data';
import css from "./WelcomeText.css";

function WelcomeText({ langue }) {
    return (
        <div className='container'>
            <div className='title'>{ traductions[langue]["title"] }</div>
            <div className='content'>{ traductions[langue]["txt"] }</div>
        </div>
    );
}

export default WelcomeText;