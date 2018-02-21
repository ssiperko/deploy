import React from 'react';
import {Link} from 'react-router-dom';

export class Display extends React.Component{
    render(){
        return(
            <section className='projects'>
                <div className="projectContainer">
                  <hr />
                    <div className="row">
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/r0435mcqb/Screen_Shot_2017-12-14_at_4.32.09_PM.png"  alt="calculator"/></div>
                          <Link to = './calc' className='link'> <div className="slide">An app that mimics the functionality and apperance of the standard, scientific calculator</div></Link>
                        </div>
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/eze1r0xwj/Screen_Shot_2017-12-14_at_2.57.26_PM.png" alt="weather app"/></div>
                            <Link to = './weather' className='link'><div className="slide">An app that allows users to view weather conditions in whatever city they elect.</div></Link>
                        </div>
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/50xoi58o3/Screen_Shot_2017-12-14_at_4.24.21_PM.png" alt="wikipedia viewer"/></div>
                            <Link to = './wiki' className='link'><div className="slide">An app that allows users to quickly access Wikipedia entries without going to the Wikipedia page.</div></Link>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/r0435mcqb/Screen_Shot_2017-12-14_at_4.32.09_PM.png" alt="calculator"/></div>
                          <Link to = './calc' className='link'> <div className="slide">An app that mimics the functionality and apperance of the standard, scientific calculator</div></Link>
                        </div>
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/eze1r0xwj/Screen_Shot_2017-12-14_at_2.57.26_PM.png" alt="weather app"/></div>
                            <Link to = './weather' className='link'><div className="slide">An app that allows users to view weather conditions in whatever city they elect.</div></Link>
                        </div>
                        <div className="col">
                            <div className="photo-container"><img src="https://s19.postimg.org/50xoi58o3/Screen_Shot_2017-12-14_at_4.24.21_PM.png" alt="wikipedia viewer"/></div>
                            <Link to = './wiki' className='link'><div className="slide">An app that allows users to quickly access Wikipedia entries without going to the Wikipedia page.</div></Link>
                        </div>
                    </div>
                    <hr />
                </div>
            </section>
        );
    }
}


/* <img src="http://www.muayfarang.com/wp-content/uploads/2014/04/Samart-Payakaroon-by-Muay-Farang-7.jpg" />*/
