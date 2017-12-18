import React, {Component} from 'react';
import { render } from 'react-dom';

class App extends React.Component
{
    render()
    {
        return(
            <div>
                Hello!
            </div>
        )
    }
}

render(<App/>,window.document.getElementById('app'));