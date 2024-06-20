import './Demo.css';

export function Demo()
{

  const secondStyle = {
    color:"white",backgroundColor:"red"
  }
  return(
    <>
      <p className='first'>
      First Statement
      </p>
      <p 
        className='second'
        style={secondStyle}
      >
        Second Statement
      </p>
    </>
  )
}
