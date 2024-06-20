import { useState } from 'react';
import Styles from './NewStyles.module.css';
import './Condition.css'

export function NewStyles(props) {
    const [userNumber, setUserNumber] = useState('')
    const onUserInput = (event) => {
        console.log(typeof(event.target.value))
        setUserNumber(parseInt(event.target.value))
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
            </h1>
            <h2 className={Styles.headingTwo}>
                This is a different kind style.
            </h2> */}
            
            <button className='myButton'>
                 My Button
            </button>
        </div>
    )
}