import React from "react"

class Counter extends React.Component {

    render() {
        //TODO: add condition when number is null or "" or not a number
        //stringNumber will be 999999 is the seconds are more than 6 digits, if not it will add 0s at the satar to complete 6 digits
        let stringSeconds = (this.props.seconds < 999999)?this.props.seconds.toString().padStart(6,'0'):"999999"
        return (
            <div className="counter">
                <span className="fa fa-clock"></span>
                <span>{stringSeconds[0]}</span>
                <span>{stringSeconds[1]}</span>
                <span>{stringSeconds[2]}</span>
                <span>{stringSeconds[3]}</span>
                <span>{stringSeconds[4]}</span>
                <span>{stringSeconds[5]}</span>
            </div>
        )
    }
}

export default Counter
