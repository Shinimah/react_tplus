import { useState } from 'react'
//import logo from './logo.svg'
import './App.css'
import { DataSheetGrid } from 'react-datasheet-grid'
import Table from './DataSheet' 
import 'react-datasheet-grid/dist/style.css'


function App() {
    return (
      <main>
        <h1>Main Table</h1>
        
        <Table />
    </main>
    )
  }

export default App;
