import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const App = () => {
    return  <div>
        <Router>
            <Switch>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/location/:locationid' Component={locationDetail}/>
                <Route exact path='/location/:locationid/update' Component={updateLocation}/>
            </Switch>
        </Router>
    </div>;
};

export default App;