import React from 'react';

export class Contact extends React.Component{
    render(){
        return(
          <div className='contact'>
            <h2 className='headline'>If you are interested in my work, you may reach me at:</h2>
            <h4 className='headline'>steven@steven-siperko.space</h4>
            <div className='contactIcons'>
            <button className='icon'><a href="https://github.com/ssiperko"><i className="fa fa-github buttonIcon" ></i></a></button>
            <button className='icon'><a href="https://www.linkedin.com/in/steven-siperko-0388325b/"><i className="fa fa-linkedin buttonIcon" ></i></a></button>
            <button className='icon'><a href="https://twitter.com/StevenSiperko"><i className="fa fa-twitter buttonIcon" ></i></a></button>
            <button className='icon'><a href="mailto:steven@steven-siperko.space"><i className="fa fa-envelope buttonIcon" ></i></a></button>
            </div>
          </div>
        );
    }
}

/*  <button className='icon'><a href="https://codepen.io/"><i className="fa fa-codepen buttonIcon" ></i></a></button> */
