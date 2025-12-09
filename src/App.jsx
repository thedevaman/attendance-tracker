import React from "react";
import 'animate.css';
import { Calendar } from "antd";

const App = ()=>{
  const onDateSelect = (value) =>{
    console.log(value.format('DD-MM-YYYY'))
  }

return(
  <div className="min-h-screen bg-gray-200">
    <div className="w-9/12 mx-auto bg-white p-12">
    <div>
      <h1>Attendance Tracker</h1>
    </div>
    <div>
          <Calendar onChange={onDateSelect}/>
    </div>      
    </div>
  </div>
)

}

export default App