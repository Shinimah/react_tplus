import React from "react";
import  ReactDOM from 'react-dom'
import { createRoot } from 'react';

class First extends React.Component {
    render() {
        return (
            <div>
                <h1>First</h1>
                <h2>1
                </h2>
            </div>
        )
    }
}

//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<First />);

export default First;