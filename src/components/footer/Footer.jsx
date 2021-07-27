import React from 'react'
import {Link} from "react-router-dom";

// import Datenschutz from './Datenschutz';
// import Impressum from './Impressum';


const Footer = () => {
    return (
        <div className='footer'>
            <Link to='/datenschutzerklaerung'>Datenschutzerklärung</Link>
            <Link to='/impressum'>Impressum</Link>
        </div>
    )
}

export default Footer
