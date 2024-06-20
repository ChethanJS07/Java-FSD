import './MyForm.css';
import { useState } from 'react';

export function MyForm(props) {

    const [firstName, setFirstName] = useState("")

    const formSubmit = (event) => {
        console.log(event.type)
    }

    const nameInput = (event) => {
        console.log(event.target.type, event.target.name, event.target.value)
        setFirstName(event.target.value)
    }

    return (
        <div className='formContainer'>
            <form onSubmit={(event) => {
                event.preventDefault()
                formSubmit(event)
            }}>
                <label>
                    First Name
                </label>
                <input
                    name='firstName'
                    type='text'
                    value={firstName}
                    onChange={nameInput}
                />
                {/* <label>
                    Last Name
                </label>
                <input name='lastName' type='text' /> */}
            </form>
            {
                firstName.length !== 0 && <h1>
                    Hi my name is {firstName}
                </h1>
            }
        </div>
    )
}