import React from 'react'
import { createRoot } from 'react-dom/client';
import * as ReactDOM from 'react-dom/client';

function Element(props: number) {
    return {
      {props.valueOf}
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Element />);