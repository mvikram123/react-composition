
import React, { useState } from "react";
import './../styles/App.css';
import Tabs from "./Tabs"

const App = () => {


  let[tabs,setTabs]=useState(
    [ 
      {title:"Tab 1",text :"This is the content for Tab 1"},
      {title:"Tab 2",text :"This is the content for Tab 2"},
      {title:"Tab 3",text :"This is the content for Tab 3"},
     ]
    )
  return (
    <div>
        {/* Do not remove the main div */}
        <Tabs tabs={tabs} />
    </div>
  )
}

export default App
