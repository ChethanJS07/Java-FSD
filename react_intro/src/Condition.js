import './Condition.css'
import { App } from './App';

export default function Condition(props) {
    // props = properties
    const myNumber = props.newNumber;

    const appNumbers = {
        first: 1,
        second: 20
    }

    const firstClick = () => {
        const isConfirm = window.confirm("Did you press the button?")
        if (isConfirm) {
            alert("You hit the button!")
        } else {
            alert("You did not hit the button!")
        }
    }

    const catchAnEvent = (event) => {
        console.log(event.type)
    }

    const listOfNames = [
        {
            name: "Prathik",
            id: 1
        },
        {
            name: "Chetan",
            id: 2
        }]

    return (
        <div>
            <button className="myButton" onClick={firstClick}>
                Click Me!
            </button>
            <button
                className="myButton"
                style={{ backgroundColor: "lightgreen" }}
                onClick={catchAnEvent}
            >
                New Button
            </button>
            {listOfNames.map((entry) => {
                return (
                    <h1 key={entry.id}>
                        {entry.name}
                    </h1>
                )
            })}
            {/* <App 
                appObject={appNumbers}
            /> */}
        </div>
    )
}