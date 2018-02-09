import React from 'react';

export class Foot extends React.Component{
    render(){
        return(
            <div className = 'foot'>
                <h5 className="foot">Coded by Steven Siperko</h5>
                <button className='icon'><a href="https://github.com/ssiperko"><i className="fa fa-github buttonIcon" ></i></a></button>
            </div>
        );
    }
}
