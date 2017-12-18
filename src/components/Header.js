import React from 'react';

class Header extends React.Component
{
    render()
    {
        return(
            <nav className="navbar navbar-default" style={{backgroundColor:"black"}}>
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li> <a href="#"> Home </a> </li>
                        <li> <a href="#"> About </a> </li>
                        <li> <a href="#"> Services </a> </li>
                        <li> <a href="#"> Contact Us </a> </li>
                        <li> <input style={{marginTop:'10px',marginLeft:'40px'}} placeholder="search" className="form-control" /> </li>
                    </ul>
                </div>
            </div>
        </nav>
        );
      
    }
}

export default Header;