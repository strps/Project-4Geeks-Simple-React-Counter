import React from "react";

class CounterControls extends React.Component {

    render() {
        return (
            <div className="counter-controls">
                <div className="Countdown-controls">
                    <label htmlFor="countdown-input">Countdown from:</label>
                    <input type="number" name="countdown-input" id="" />
                    <button>Go!</button>
                </div>
                <div>
                    <label htmlFor="">Alert at:</label>
                    <input type="number" />
                    <button><i className="bi bi-alarm"></i></button>
                </div>
                <div>
                    <button type="button" name="plar-stop">
                        <i class="bi bi-play"></i>
                    </button>
                    <button type="reset">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default CounterControls
