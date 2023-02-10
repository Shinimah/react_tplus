//import React from 'react'
//import { createRoot } from 'react-dom/client';
//import * as ReactDOM from 'react-dom/client';
import { useState } from 'react'
import {
    DataSheetGrid,
 //   checkboxColumn,
    textColumn,
    keyColumn,
  } from 'react-datasheet-grid'
  
  import 'react-datasheet-grid/dist/style.css'
  
  const Table = () => {
    const [ data, setData ] = useState([
      { building: 'house', date: '0', weather: '1', consumption: '2' },
   //   { active: false, firstName: 'Jeff', lastName: 'Bezos' },
    ])
  
    const columns = [
   /*   {
        ...keyColumn('active', checkboxColumn),
        title: 'Active',
      },*/
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
      <DataSheetGrid
        value={data}
     //   onChange={setData}
        columns={columns}
      />
    )
  }

  export default Table;