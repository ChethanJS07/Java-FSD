import { useState } from 'react';
import Styles from './NewStyles.module.css';
import './Condition.css'

export function NewStyles(props) {

    // [state, function that sets the state]
    const [userNumber, setUserNumber] = useState('')
    // 1. Only in React functional components
    // 2. Declared top level
    // 3. Can not be conditional

    const onUserInput = (event) => {
        setUserNumber(parseInt(event.target.value))
    }

    const [color, setColor] = useState('red')
    const [car, setCar] = useState({
        color: "red",
        brand: "Maruti",
        model: "Swift"
    })

    const changeCarColour = () => {
        setCar(prevState => {
            // spread operator
            return { ...prevState, color: "blue" }
        })
    }

    const [listState, setListState] = useState([0,1,2,3,4,5])

    const updateList = () => {
        // only creates a reference to the object, does not copy it
        // const prevListState = listState;
        // [1,2,3] => 1, 2, 3
        const prevListState = [...listState];
        prevListState[3] = 6
        console.log(prevListState)
        setListState(prevListState)
    }

    return (
        <div>
            {/* <input
                value={userNumber}
                type='number'
                name='userNumber'
                onChange={onUserInput}
            />
            <h1 className={userNumber % 2 ? Styles.headingOne : Styles.headingTwo}>
                This is a different kind style.
            </h1> */}
            {/* <h2 className={Styles.headingTwo} onClick={changeCarColour}>
                {car.color}
            </h2> */}
            <button className='myButton'
                style={{
                    backgroundColor: color
                }}
                onClick={updateList}
            >
                Update List
            </button>
            {
                listState.map((value, index) => (
                    <p key={index}>
                        {value}
                    </p>
                ))
            }
        </div>
    )
}