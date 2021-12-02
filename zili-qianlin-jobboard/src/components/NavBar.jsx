import React from 'react';
import {NavLink} from 'react-router-dom'
import {ReactComponent as Home} from '../logos/home.svg';
import {ReactComponent as JobSearch} from '../logos/search-logo.svg';

import "../style/NavBar.css";

const NavBar = ({history}) =>{
    const handleClick=() =>{
        history.push('/')
        // isLogged(false)
    }
    return(
        <nav>
            <div className='div-header'>
                <div className='div-svg-search' onClick={() => history.push('/')}>
                    <JobSearch/>
                </div>
                <div style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <NavLink exact to='/Home' activeClassName='active'><Home className='div-svg'/></NavLink>
                    {/* <NavLink exact to='/favoriate-page' activeClassName='active'><FavortiatePage className='div-svg'/></NavLink> */}
                    <button className='button-header' href="login" onClick={handleClick}>Log in</button>
                    <div className="divider"/>
                    <button className='button-header' href="signup" onClick={handleClick}>Sign up</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;