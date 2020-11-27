/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./SpeedoMeter.css";

export default function Speedometer() {
    let [ speedValue, setSpeedValue ] = useState(0);
    useEffect(() => {
        if (speedValue < 225) {
            const interval = setInterval(() => {
                setSpeedValue((speedValue) => speedValue + 5);
            }, 1000);
            return () => {
                  clearInterval(interval);
                };
        } else 
            setSpeedValue(0)
    }, [speedValue]);
    
    return (
        <div className="gauge">
            <section className="gaugeBody">
                <div>
                    <form id="drawTemp">
                        <input type="number" id="speed" name="speed" value={speedValue} readOnly/>
                    </form>
                </div>
            </section>
        </div>
    );
}