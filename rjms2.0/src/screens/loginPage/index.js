import React from 'react'
import leftImage from '../../assets/images/bpaScarves.jpg'
import roverLogo from '../../assets/logos/roverLogo.png'
import LeftDiv from './containers/LeftDiv.js'
import RightDiv from './containers/RightDiv.js'
import Header1 from '../../components/headers'
import './style.css'

const LoginPage = () => {
    return( 
        <div className="LoginPage">
            <Header1/>
            <div className='BackgroundImage' style={{backgroundImage: `url(${leftImage})`}}>
                <div id="LDiv">
                    <LeftDiv/>
                </div>
                <div id="RDiv">
                    <RightDiv logo={roverLogo}/>
                </div>
            </div>
            <Header1/>
        </div>
        
    )
}

export default LoginPage