import React from 'react';
import french from '../../assets/france.svg';
import england from '../../assets/united-kingdom.svg';
import spain from '../../assets/spain.svg';
import css from './FlagButtons.css'
// import traductions from '../data';

function FlagButtons({ switchLangue }) {
    const handleButtonClick = (button_lang) => {
        switchLangue(button_lang);
    }

    return (
        <div className='flags'>
            <div onClick={() => handleButtonClick("FR")}>
                <img src={french} alt="french flag"/>
            </div>
            <div onClick={() => handleButtonClick("EN")}>
                <img src={england} alt="england flag"/>
            </div>
            <div onClick={() => handleButtonClick("ES")}>
                <img src={spain} alt="spain flag"/>
            </div>
        </div>
    );
}

export default FlagButtons;