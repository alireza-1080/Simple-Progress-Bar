import "./App.css"
import React, { useState } from 'react'
import ProgressItem from "./components/ProgressItem/ProgressItem"

function App() {

  const [dataBase] = useState([
    {title: "HTML", progress: 90},
    {title: "CSS", progress: 70},
    {title: "JavaScript", progress: 50},
    {title: "NodeJs", progress: 30},
  ]);

  return (
    <div className="body">
      <div className="app-container">
        {dataBase.map((data) => {
            return <ProgressItem {...data}/>
        })}
      </div>
    </div>
  )
}

export default App