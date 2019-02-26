import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import About from './contents/About';
import Work from './contents/Work';
import Contact from './contents/Contact';

const App = () => {
    return(
        <div>
            <BrowserRouter >
                <div>
                    <Header />
                    <div >
                        <Route path="/" exact component={Home}/>
                        <Route path="/about" exact component={About}/>
                        <Route path="/work" exact component={Work}/>
                        <Route path="/contact" exact component={Contact}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;