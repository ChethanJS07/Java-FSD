import './EventEg.css';

export function EventEg(props)
{
  const buttonClicked = (event)=>{
    console.log(event.target.name);
  }

  // const dontClick = ()=>{
  //   const isConfirm = window.confirm("Don't Click");
  //   if(isConfirm)
  //   {
  //     window.alert("You Clicked");
  //   }
  //   else
  //   {
  //     window.alert("Don't Do it Again");
  //   }
  // }
  return(
    <div className='eventsContainer'>
      <button 
        name='Click Me Button'
        className='eventButton'
        onClick={buttonClicked}
      >
        CLICK ME
      </button>
      {/* <button 
        className='eventButton'
        onClick={dontClick}
      >
        DON'T CLICK ME
      </button> */}
    </div>
  )
}