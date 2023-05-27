import React, { useState } from 'react'

const Calculator = () => {
  const [value, setValue]=useState([])
  const Error= "Invalid Input"
  const handleValue=(e)=>{
    const buttonText=e.target.innerText
    setValue( [...value, buttonText]);
  }
  const handleChange=(e)=>{
    setValue([e.target.value])
  }
  let clickedText=value.join('')

  const answer=()=>{
    try {
      // eslint-disable-next-line
    const result=eval(clickedText)
    const finalResult=Math.round(result * 100000) / 100000;
    setValue([finalResult])
    } catch (error) {
      setValue([Error])
    }
    
  }
  const handleClear=()=>{
    setValue([]);
  }
  const handleDelete=()=>{
     clickedText = clickedText.substring(0, clickedText.length - 1);
      setValue([clickedText] )    
  }
  return (
    <div className='m-5'>
      <h1 className='text-center'> <b>Calculator</b> </h1><br />
      <div className="">
        <input type="text" className='d-block m-auto' value={clickedText} style={{ color: clickedText===Error? "red": "black"}} onChange={handleChange} />
        
      <div  className="d-flex align-items-center justify-content-center ">
            <button  className="design-btn" onClick={handleClear}>C</button>
            <button  onClick={handleValue}  className="design-btn">%</button>
            <button  onClick={handleValue}  className="design-btn">3.1416</button>
            <button  onClick={handleValue} className="design-btn">/</button>
        </div>
        <div  className="d-flex align-items-center justify-content-center ">
            <button onClick={handleValue} className="design-btn">7</button>
            <button  onClick={handleValue}  className="design-btn">8</button>
            <button   onClick={handleValue} className="design-btn">9</button>
            <button   onClick={handleValue} className="design-btn">*</button>     
        </div>
        <div  className=" d-flex align-items-center justify-content-center">
            <button   onClick={handleValue} className="design-btn">4</button>
            <button   onClick={handleValue} className="design-btn">5</button>
            <button   onClick={handleValue} className="design-btn">6</button>
            <button   onClick={handleValue} className="design-btn">+</button>
      
        </div>
        <div  className="d-flex align-items-center justify-content-center ">
            <button   onClick={handleValue} className="design-btn">1</button>
            <button   onClick={handleValue} className="design-btn">2</button>
            <button   onClick={handleValue} className="design-btn">3</button>
            <button   onClick={handleValue} className="design-btn">-</button>      
        </div>
        <div  className="d-flex align-items-center justify-content-center ">
            <button   onClick={handleValue} className="design-btn">0</button>
            <button   onClick={handleValue} className="design-btn">.</button>
            <button onClick={handleDelete}  className="design-btn">DEL</button>
            <button onClick={answer}  className="design-btn bg-success" >=</button>
        </div>
        </div>
    </div> 
  )
}

export default Calculator

