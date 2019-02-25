import "materialize-css/dist/js/materialize.min.js";
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './Header';

const App = () => {
    return(
        <div className="ui container">
            <BrowserRouter >
                <div>
                    <Header />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;