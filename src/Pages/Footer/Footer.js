import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <footer>
            <h5 className='text-center mt-5'>Copyright &copy; reserved by Masud Rana {year} </h5>
        </footer>
    );
};

export default Footer;