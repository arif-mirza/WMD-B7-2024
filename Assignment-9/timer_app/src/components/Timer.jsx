import React, { useRef } from "react";
import "../components/timer.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setMode,
  setSelectedMinutes,
  setSelectedSeconds,
  startTimer,
  stopTimer,
  resetTimer,
  incrementSeconds,
  decrementTimer,
} from "../features/TimerSlice.jsx";

function Timmer() {
  const timer = useRef(null);

  // redux logic
  const dispatch = useDispatch();
  const {
    isRunning,
    seconds,
    minutes,
    heading,
    selectedMinutes,
    selectedSeconds,
    mode,
  } = useSelector((state) => state.timer);


  // handleModeChange
  const handleModeChange = (selectedMode) => {
    dispatch(setMode(selectedMode));
    clearInterval(timer.current);
  };

  // startAction
  const startAction = () => {
    if (isRunning) return;

   

    dispatch(startTimer());

    if (mode === "Stop Watch") {
      timer.current = setInterval(() => {
        dispatch(incrementSeconds());
      }, 1000);
    } else if (mode === "Timer") {
      let remainingMinutes = selectedMinutes;
      let remainingSeconds = selectedSeconds;
      console.log(remainingMinutes, ";", remainingSeconds);
       // Prevent starting if both minutes and seconds are zero
    if (remainingMinutes === 0 && remainingSeconds === 0) {
      alert("Please set a time to start the countdown.");
      return;
    }

      timer.current = setInterval(() => {
        if (remainingMinutes === 0 && remainingSeconds === 0) {
          clearInterval(timer.current);
          alert("Time Over");
          dispatch(resetTimer());
        } else {
          if (remainingSeconds === 0) {
            remainingMinutes -= 1;
            remainingSeconds = 59;
          } else {
            remainingSeconds -= 1;
          }

          dispatch(setSelectedMinutes(remainingMinutes));
          dispatch(setSelectedSeconds(remainingSeconds));
        }
      }, 1000);
    } else {
      alert("Invalid Mode Selected");
    }
  };

  // stopAction
  const stopAction = () => {
    dispatch(stopTimer());
    clearInterval(timer.current);
  };

  // resetAction
  const resetAction = () => {
    dispatch(resetTimer());
    clearInterval(timer.current);
  };

  return (
    <>
      <div className="home-container">
        <div className="left-container">
          <div className="main-heading">
            <h1>{heading}</h1>
          </div>
          <div className="main-container">
            <div className="timer-section">
              {/* Display the live countdown using minutes and seconds */}
              <h3 className="numbers">
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h3>
            </div>
          </div>
        </div>

        <div className="right-container">
          <div className="form-section">
            {mode === "Timer" && (
              <div className="countDown">
                <label>Minutes:</label>
                <select
                  value={selectedMinutes}
                  onChange={(e) =>
                    dispatch(setSelectedMinutes(Number(e.target.value)))
                  }
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
                  onChange={(e) =>
                    dispatch(setSelectedSeconds(Number(e.target.value)))
                  }
                >
                  {[...Array(60).keys()].map((sec) => (
                    <option key={sec} value={sec}>
                      {sec < 10 ? `0${sec}` : sec}
                    </option>
                  ))}
                </select>
              </div>
            )}

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
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleModeChange("Stop Watch")}
                  >
                    Stop Watch
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleModeChange("Timer")}
                  >
                    Timer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="btn-sec">
            <button className="unique-btn" onClick={startAction}>
              Start
            </button>
            <button className="unique-btn" onClick={stopAction}>
              Stop
            </button>
            <button className="unique-btn" onClick={resetAction}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Timmer;
