import React from "react";
//import ReactDOM from 'react-dom'
import { createRoot } from 'react-dom/client';

class First extends React.Component {
    render() {
        return (
            <div>
                <h1>First</h1>
                <h2>I was Afraid</h2>
            </div>
        )
    }
}

const element = document.getElementById('root')
const root = createRoot(element)
root.render(<First />)