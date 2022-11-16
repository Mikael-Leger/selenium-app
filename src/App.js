import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { Menubar } from "primereact/menubar";
import "primereact/resources/themes/arya-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";


function App() {
  const [value1, setValue1] = useState();
  const [displayDialog, setdisplayDialog] = useState(false);

  function addTask() {
    setdisplayDialog(true);
  }

  const onHide = () => {
    setdisplayDialog(false);
    setValue1("")
  }

  const renderFooter = () => {
    return (
      <div>   
        <Button label="Ok" icon="pi pi-check" onClick={() => onHide()} autoFocus />
      </div>
    );
  }

  const start = <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/Logo_Efrei_PAris_2.png?20210113105253" width={150} height={50} />;

  const end = "Mikaël LEGER";

  return (
    <div className="App">
      <Menubar className="menubar" start={start} end={end} />
      <div className="container">
        <InputText className="task" value={value1} placeholder="Insert task title here" onChange={(e) => setValue1(e.target.value)} />
        <Button label="Submit" aria-label="Submit" onClick={addTask} />
        <Dialog header="Submission" visible={displayDialog} style={{ width: "50vw" }} footer={renderFooter()} onHide={() => onHide("displayDialog")}>
          <p className="task-success">The task {value1} has been submitted with success!</p>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
