import React from "react";
import  ReactDOM from 'react-dom'
import { createRoot } from 'react';
import { useState } from 'react'
import './App.css'
import { DataSheetGrid } from 'react-datasheet-grid'
import Table from './DataSheet' 
import First from './Test';
import 'react-datasheet-grid/dist/style.css'


function App() {
    return (
      <main>
        <h1 className='title'>Main Table</h1>
        <p className="graphic"><a href="">Go to the graphics</a></p>
        <Table />
        <First />
    </main>
    )
  }

export default App;
