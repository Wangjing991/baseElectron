import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "easymde/dist/easymde.min.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import BottomBtn from "./components/BottomBtn";

function App() {
    const [count,setCount ] = useState(0)
  return (
    <div className="App container-fluid">
      <BottomBtn
        text="增加"
        colorClass="btn-primary"
        icon={faPlus}
        onBtnClick={()=>{
            setCount(count+1)
        }}
      />
      {count}
    </div>
  );
}

export default App;
