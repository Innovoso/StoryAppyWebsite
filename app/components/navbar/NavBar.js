import React from 'react';
import Scroll from 'react-scroll';

var Link = Scroll.Link;

class NavBar extends React.Component{
  render(){
    return(

      <div className="primary title-bar">
        <div className="grid-block">
          <div className="medium-11 grid-block">
          <span className="left">
            <img src="img/StoryAppyLogoSmall.png" className="logo" />
            <span className="logo-text">StoryAppy</span>
          </span>
          </div>
          <div className="medium-1 grid-block nav-links">
            <span className="right login-button">
              <Link to="login-section" spy={true} smooth={true} duration={2000}>
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>

    )
  }
}

export default NavBar;
