import React from 'react';
import preloader from '../../assets/images/luminousRing.gif'

export const Preloader = () => {
    return (
        <div>
            <img width={100} height={100} src={preloader} alt="preloader"/>
        </div>
    );
};

