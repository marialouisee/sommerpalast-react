import React from 'react'
import { Link } from 'react-router-dom'
// import '../scss/main.scss'

const Side = () => {
    return (
        <div className='logoDiv'>
            <Link to='/home' className='side' >
                < img src={process.env.PUBLIC_URL + "/img/sommerpalastLogo.svg"} alt="sommerpalast logo"/>        
            </Link>        
        </div>
    )
}

export default Side
