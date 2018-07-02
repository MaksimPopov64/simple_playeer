import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Common from './components/Common/Common';
import Video from './components/controls/Video/Video';


const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path='/video' component={Video}/>
                    <Route exact path="/" component={Common}/>
                    <Route exact path="/main" component={Common}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;