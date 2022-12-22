import React, { useState } from "react";
import './App.css';

function App() {
  const [result, setResult] = useState('');
  const printNumber = (event) => {
    setResult(result.concat(event.target.value))
  }
  const C = () => {
    setResult("");
  }
  const equal = () => {
    setResult(eval(result).toString());
  }

  return (
    <div className="calc" name="container">
      <table className='table' name="table">
        <tr>
          <td colSpan='4'><input type="text" className="text" id='text' disabled value={result} /></td>
        </tr>
        <tr>
          <td><input type="button" className='Number' value='7' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='8' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='9' onClick={printNumber} /></td>
          <td><input type="button" className='Number operator' value='+' onClick={printNumber} /></td>
        </tr>
        <tr>
          <td><input type="button" className='Number' value='4' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='5' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='6' onClick={printNumber} /></td>
          <td><input type="button" className='Number operator' value='-' onClick={printNumber} /></td>
        </tr>
        <tr>
          <td><input type="button" className='Number' value='1' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='2' onClick={printNumber} /></td>
          <td><input type="button" className='Number' value='3' onClick={printNumber} /></td>
          <td><input type="button" className='Number operator' value='*' onClick={printNumber} /></td>
        </tr>
        <tr>
          <td><input id="clear1" type="button" className='Number operator' value='C' onClick={C} /></td>
          <td><input type="button" className='Number' value='0' onClick={printNumber} /></td>
          <td><input type="button" className='Number operator' value='=' onClick={equal} /></td>
          <td><input type="button" className='Number operator' value='/' onClick={printNumber} /></td>
        </tr>
      </table>
    </div>
  );
}
//my_calculator

export default App;
