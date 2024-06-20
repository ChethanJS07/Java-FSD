import { useEffect, useState } from "react";
export function Effect(props) {

    // useEffect(<function>, <dependency> <= optional)
    // useeffects get triggered on render
    // useEffect(() => {
    //     // state change results in rerender
    //     setCount((count) => count + 1)
    //     // empty dependency list means run ONCE only
    // }, [])

    // on state change, the component rerenders
    // const [userInput, setUserInput] = useState('')
    const [count, setCount] = useState(0)

    const [timer, setTimer] = useState(5)

    // useEffect(() => {
    //     if (timer) {
    //         // setTimeout(function, delay)
    //         setTimeout(() => {
    //             setTimer(timer => timer - 1)
    //         }, 1000)
    //     }
    // }, [timer])

    // clear timeout
    // useEffect(() => {
    //     const renderCount = setTimeout(() => {
    //         setCount(count => count + 1)
    //     }, 1000)

    //     return () => clearTimeout(renderCount)
    // }, [])


    // const changeTimer = () => {
    //     setTimer(timer => timer * 3)
    //     // react does batch state updates
    //     // value will be previous value itself till
    //     // function ends
    //     console.log(timer)
    // }

    return (
        <>
            {/* <input
                type='text'
                value={userInput}
                onChange={
                    (event) => setUserInput(event.target.value)
                }
            /> */}
            <h1>
                I have rendered {count} times.
            </h1>
            {/* <h1
                // onClick={changeTimer}
            >
                You have {timer} seconds.
            </h1> */}
        </>
    )
}