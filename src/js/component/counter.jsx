import React from "react"

class Counter extends React.Component {

    render() {
        //TODO: add condition when number is null or "" or not a number
        //stringNumber will be 999999 is the seconds is more than 6 digits, if not it will add 0s at the satar to complete 6 digits
        let stringSeconds = (this.props.data.count < 999999) ? this.props.data.count.toString().padStart(6, '0') : "999999"
        return (
            <div className="counter-container">
                <div className="counter">
                    <span className="fa fa-clock"></span>
                    <span>{stringSeconds[0]}</span>
                    <span>{stringSeconds[1]}</span>
                    <span>{stringSeconds[2]}</span>
                    <span>{stringSeconds[3]}</span>
                    <span>{stringSeconds[4]}</span>
                    <span>{stringSeconds[5]}</span>
                </div>
                <div className="counter-controls">
                    <div className="Countdown-controls">
                        <label htmlFor="countdown-input">Countdown from:</label>
                        <input type="number" min="0" onChange={this.props.handlers.setCountdown} placeholder="0" />
                        <button className={this.props.data.countdown? "button-active" : ""} onClick={this.props.handlers.startCountdown}>Go!</button>
                    </div>
                    <div>
                        <label htmlFor="">Alert at:</label>
                        <input type="number" placeholder="0" onChange={this.props.handlers.setAlert}/>
                        <button className={this.props.data.alert ? "button-active" : ""} onClick={this.props.handlers.alert}><i className="bi bi-alarm"></i></button>
                    </div>
                    <div>
                        <button className={(this.props.data.direction == -1) ? "button-active" : ""} onClick={this.props.handlers.setBackwardCounting}><i className="bi bi-caret-left"></i></button>
                        <button type="button" name="play-stop" onClick={this.props.handlers.toggleCounting}>
                            <i className={this.props.data.isRunning ? "bi bi-pause" : "bi bi-play"}></i>
                        </button>
                        <button type="reset" onClick={this.props.handlers.reset}>
                            <i className="bi bi-arrow-clockwise"></i>
                        </button>
                        <button className={(this.props.data.direction == 1) ? "button-active" : ""} onClick={this.props.handlers.setForwardCounting}><i className="bi bi-caret-right"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter
