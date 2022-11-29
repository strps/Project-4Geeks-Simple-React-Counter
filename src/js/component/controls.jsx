import React from "react";

class CounterControls extends React.Component {

    render() {
        return (
            <div className="counter-controls">
                <div className="Countdown-controls">
                    <label htmlFor="countdown-input">Countdown from:</label>
                    <input type="number" name="countdown-input" id="" placeholder="Countdown from:"/>
                    <button>Go!</button>
                </div>
                <div>
                    <label htmlFor="">Alert at:</label>
                    <input type="number" placeholder="Alert at:"/>
                    <button><i className="bi bi-alarm"></i></button>
                </div>
                <div>
                    <button type="button" name="play-stop" onClick={this.props.handlers.play}>
                        <i className={this.props.data.running?"bi bi-pause":"bi bi-play"}></i>
                    </button>
                    <button type="reset" onClick={this.props.handlers.reset}>
                        <i className="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>
        )
    }
}

export default CounterControls
