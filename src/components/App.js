import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import Home from './tabs/Home';
import About from './tabs/About';
import Work from './tabs/Work';
import Contact from './tabs/Contact';

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
                        <Route path="/contact" exact render={()=><Contact/>}/>
                    </div>
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;