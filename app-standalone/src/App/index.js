import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './app.css';

import AppHeader from './components/AppHeader/AppHeader';
import Game from './components/Game/Game';

const App = () => (
    <Router>
        <div className="App container">
            <AppHeader/>
            <Switch>
                <Route path="/" exact component={Game}/>
            </Switch>
        </div>
    </Router>
);

export default App;