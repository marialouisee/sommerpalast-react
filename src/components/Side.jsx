import React from 'react'
import { Link } from 'react-router-dom'
import logoImage from '../img/sommerpalastLogo.svg';

const Side = () => {
    return (
        <div className='logoDiv'>
            <Link to='/home' className='side' >
                < img src={logoImage} alt="sommerpalast logo"/>        
            </Link>        
        </div>
    )
}

export default Side
