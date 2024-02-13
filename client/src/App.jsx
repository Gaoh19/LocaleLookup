import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './routes/Home';
import LocationDetail from './routes/LocationDetail';
import UpdatePage from './routes/UpdatePage';


const App = () => {
    return  <div>
        <Router>
            <Routes>
                <Route exact path='/' Component={Home}/>
                <Route exact path='/location/:locationid' Component={LocationDetail}/>
                <Route exact path='/location/:locationid/update' Component={UpdatePage}/>
            </Routes>
        </Router>
    </div>;
};

export default App;