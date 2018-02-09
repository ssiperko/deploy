import React from 'react';
import {Home} from './Components/Home'
import {Bio} from './Components/Bio';
import {Contact} from './Components/Contact';
import {Calc} from './Projects/Calc/Calc';
import {Weather} from './Projects/Weather/Weather';
import {Wiki} from './Projects/Wiki/Wiki';
import {Display} from './Components/ProjectDisplay';
import {Switch, Route} from 'react-router-dom';

export class Main extends React.Component {
    render(){
      return(
          <div>
              <Switch>
                  <Route exact path = '/' component = {Home}/>
                  <Route exact path = '/home' component = {Home}/>
                  <Route exact path = '/bio' component = {Bio}/>
                  <Route exact path ='/contact' component = {Contact} />
                  <Route exact path ='/projects' component = {Display} />
                  <Route path ='/calc' component ={Calc}/>;
                  <Route path ='/weather' component ={Weather}/>;
                  <Route path ='/wiki' component ={Wiki}/>;
              </Switch>
          </div>
      );
    }
}
