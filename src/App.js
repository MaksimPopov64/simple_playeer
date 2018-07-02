import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';



const App = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Main}/>
                    <Route exact path="/main" component={Common}/>
                    <Route exact path="/auth" component={Video}/>
                </Switch>
            </div>
        </Router>
    );
};

export default App;