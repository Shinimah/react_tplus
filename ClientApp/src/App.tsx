//import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { DataSheetGrid } from 'react-datasheet-grid'
import Table from './DataSheet' 
import 'react-datasheet-grid/dist/style.css'

function App() {
    return (
      <main>
      <h1>Hi</h1>
      <DataSheetGrid 
      />
      <Table />
      </main>
      /*<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count: number) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>*/
    )
  }

export default App;
