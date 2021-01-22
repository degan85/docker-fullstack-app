import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, TimelineMemo, About, Posts } from './pages'
import Menu from './components/Menu';
import CounterContainer from './containers/CounterContainer';

class App extends Component {
    render() {
        return (
            <div>
                <Menu/>
                <Route exact path="/" component={Home}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/timeline" component={TimelineMemo}/>
                <Route path="/posts" component={Posts}/>
                <Route path="/counter" component={CounterContainer}/>
            </div>
        );
    }
}

export default App;