import React from 'react';
import {Link} from 'react-router-dom';

export class Header extends React.Component{
    render(){
        return(
          <div className = 'header'>
              <div className='headLink'><Link to = './home'>HOME</Link></div>
              <h5 className='headLink'><Link to = './projects'>PROJECTS</Link></h5>
              <h5 className='headLink'><Link to = './contact'>CONTACT</Link></h5>
          </div>
        );
    }
}

/*<h5 className='headLink'><Link to = './bio'>BIO</Link></h5>*/
