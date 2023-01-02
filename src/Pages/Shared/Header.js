import moment from 'moment/moment';
import React from 'react';

const Header = () => {
    return (
        <header>
            <h2>Services : {moment().format('MMMM Do YYYY, h:mm:ss a')}</h2>

        </header>
    );
};

export default Header;