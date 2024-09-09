import React, { useState, useRef } from "react";
import "../components/timer.css";

function Timmer() {
  // states
  const [isRunning, setIsRunning] = useState(false);
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [heading, setHeading] = useState("Select the Mode");
  const [selectedMinutes, setSelectedMinutes] = useState(0);
  const [selectedSeconds, setSelectedSeconds] = useState(0);
  const [mode, setMode] = useState("mode");
  const timer = useRef(null)

  // handleModeChange
  const handleModeChange = (selecedMode) => {
    setMode(selecedMode);
    setHeading(selecedMode);
    setSeconds(0)
    setMinutes(0)


  }

  // startACtion
  const startAction = () => {
    if (isRunning) return; 
    setIsRunning(true);
  
    if (mode === "Stop Watch") {
      timer.current = setInterval(() => {
        setSeconds((prevSecond) => {
          if (prevSecond === 59) {
            setMinutes((prevMinute) => prevMinute + 1);
            return 0;
          } else {
            return prevSecond + 1;
          }
        });
      }, 1000);
  
    } else if (mode === "Timer") {
      let remainingMinutes = parseInt(selectedMinutes);
      let remainingSeconds = parseInt(selectedSeconds);
  
      if (isNaN(remainingMinutes)) remainingMinutes = 0;
      if (isNaN(remainingSeconds)) remainingSeconds = 0;
  
      setMinutes(remainingMinutes);
      setSeconds(remainingSeconds);
  
      timer.current = setInterval(() => {
        // Local variables to capture the current state of minutes and seconds
        let updatedMinutes = remainingMinutes;
        let updatedSeconds = remainingSeconds;
  
        if (updatedSeconds === 0) {
          if (updatedMinutes === 0) {
            clearInterval(timer.current);
            alert("Time Over");
            setSeconds(0);
            setMinutes(0);
            setIsRunning(false);  // Stop running flag
          } else {
            // Decrement minutes and reset seconds to 59
            updatedMinutes -= 1;
            updatedSeconds = 59;
          }
        } else {
          // Decrement seconds
          updatedSeconds -= 1;
        }
  
        // Update the state variables for next cycle
        remainingMinutes = updatedMinutes;
        remainingSeconds = updatedSeconds;
  
        
        setMinutes(updatedMinutes);
        setSeconds(updatedSeconds);
      }, 1000);
  
    } else {
      alert("Invalid Mode Selected");
    }
  };
  




  // stopAction
  const stopAction = () => {
    setIsRunning(false);
    clearInterval(timer.current)
  }
  // resetAction
  const resetAction = () => {
    setIsRunning(false);
    clearInterval(timer.current)
    setSeconds(0)
    setMinutes(0)
  }

  return (
    <>
      <div className="home-container">
        <div className="left-container">
          <div className="main-heading">
            <h1>{heading}</h1>
          </div>
          <div className="main-container">
            <div className="timer-section">
              <h3 className="numbers">
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h3>
            </div>
          </div>
        </div>
        <div className="right-container">
          <div className="form-section">
            {/* add the mode condition */}
            {
              mode === "Timer" && (
                <div className="countDown">
                  <label>Minutes:</label>
                  <select
                    value={selectedMinutes}
                    onChange={(e) => setSelectedMinutes(Number(e.target.value))}
                  >
                    {[...Array(60).keys()].map((min) => (
                      <option key={min} value={min}>
                        {min < 10 ? `0${min}` : min}
                      </option>
                    ))}
                  </select>
            
                  <label>Seconds:</label>
                  <select
                    value={selectedSeconds}
                    onChange={(e) => setSelectedSeconds(Number(e.target.value))}
                  >
                    {[...Array(60).keys()].map((sec) => (
                      <option key={sec} value={sec}>
                        {sec < 10 ? `0${sec}` : sec}
                      </option>
                    ))}
                  </select>
                </div>
              )
            }

            <div className="input-group mb-3">
              <button
                className="btn btn-light dropdown-toggle unique-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                
              >
                {mode}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <a className="dropdown-item" href="#"
                  onClick={() => handleModeChange("Stop Watch")}
                  >
                    Stop Watch
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#"
                  onClick={() => handleModeChange("Timer")}
                  >
                    Timer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-sec">
            <button className="unique-btn"
            onClick={startAction}
            
            >Start</button>
            <button className="unique-btn"
            onClick={stopAction}
            
            >Stop</button>
            <button className="unique-btn"
             onClick={resetAction}
            
            >Reset</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timmer;

