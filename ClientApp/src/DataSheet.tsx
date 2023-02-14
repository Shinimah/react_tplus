//import React from 'react'
//import { createRoot } from 'react-dom/client';
//import * as ReactDOM from 'react-dom/client';
import First from './Test' 
import { useState } from 'react'
//import { data } from './../../data.json'
import {
    DataSheetGrid,
    textColumn,
    keyColumn,
  } from 'react-datasheet-grid'  
  import 'react-datasheet-grid/dist/style.css'
  
  const Table = () => {

    const [ data, setData ] = useState([
      { building: 'data.houses', date: '0', weather: '1', consumption: '2' },
    ])
  
    const columns = [
      {
        ...keyColumn('building', textColumn),
        title: 'Building',
      },
      {
        ...keyColumn('date', textColumn),
        title: 'Date',
      },
      {
        ...keyColumn('weather', textColumn),
        title: 'Weather',
      },
      {
        ...keyColumn('consumption', textColumn),
        title: 'Consumption',
      },
    ]

    return (
      <main><DataSheetGrid
        value={data}
        onChange={setData}
        columns={columns}
      />
      </main>
    )
  }

  export default Table;