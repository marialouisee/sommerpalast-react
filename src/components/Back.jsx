import React from 'react';
import { FaArrowLeft } from "react-icons/fa";
import {Link} from 'react-router-dom';


const Back = () => {
    return (
        <div className='backToHome'>
           <Link to='/home'><FaArrowLeft/> ZURÜCK</Link>
        </div>
    )
}

export default Back


