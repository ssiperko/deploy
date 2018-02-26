import React from 'react';
//import {Display} from './ProjectDisplay';
import {Link} from 'react-router-dom';


export class Home extends React.Component{
    render(){
        return(
          <div>
                <div className='headline'>
                    <h1>Steven Siperko</h1>
                    <Link to ='./projects'><h3 className="port">portfolio</h3></Link>
                </div>
            </div>
        );
    }
}
