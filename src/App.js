import './App.css';
import { useState } from 'react';

function App() {
  let code = '1234'
  let displayMsg = 'Enter Code ' + code
  // displayLen is the counter to keep track of how many characters we have in the display
  const [displayLen, setDisplayLen] = useState(0)
  // displayNum is the string that will be displayed on the screen
  const [displayNum, setDisplayNum] = useState(displayMsg)
  // btnCheckPressed keeps track if the button was pressed 
  const [btnCheckPressed, setBtnCheckPressed] = useState(false)

  // every time we click a numeric button
  // we check to see if the length os the display is less than 6 so we can have only 6 digits
  // we check if the check button has been pressed so we can clear the display

  function numericBtn (i){
    if (displayLen < 6) {
      // if the check button is pressed, we reset it and add the pressed number
      if(btnCheckPressed){
        setBtnCheckPressed(!btnCheckPressed)
        resetDisplay(i)
        return
      }
      // when the display is clear, just add the number. if not, add the number to the end
      if(displayLen===0){
        setDisplayNum(i)
      }else{
        setDisplayNum(displayNum + i)
      }
      // increase the display counter
      setDisplayLen(displayLen + 1)
    }
  }

  // this function clear the display, reset the counter and add the number pressed to the display
  function resetDisplay (j){
    setDisplayNum(displayMsg)
    setDisplayLen(0)
    numericBtn(j)
    return
  }

  // this function takes the last element of the array and subtract from the display counter
  function backBtn (){
    if(!btnCheckPressed){
      let newDisplayNum = displayNum
      if(displayLen>0){
        setDisplayNum(newDisplayNum.slice(0,displayLen - 1))
        setDisplayLen(displayLen - 1)
      }
    }
  }
  // this function validates the display against the valid code and allows to restart the process
  function checkBtn (){
    if(!btnCheckPressed){
      if(displayNum===code){
        setDisplayNum('Code Valid')
      }else{
        setDisplayNum('Invalid Code')
      }
      setDisplayLen(0)
    }
  }

  return (
    <div className="App">
      <header className="App-header">

        <section className='displayRow'>
          <h2>{displayNum}</h2>
        </section>
                                                            {/* instead of coding in each line, we call the same function with the parameter as the button value*/}
        <section className='firstRow'>
          <button type="button" className='btn btn-primary' id='btn-1' onClick={()=> numericBtn('1')}>1</button>
          <button type="button" className='btn btn-primary' id='btn-2' onClick={()=> numericBtn('2')}>2</button>
          <button type="button" className='btn btn-primary' id='btn-3' onClick={()=> numericBtn('3')}>3</button>
        </section>

        <section className='secondRow'>
          <button type="button" className='btn btn-primary' id='btn-4' onClick={()=> numericBtn('4')}>4</button>
          <button type="button" className='btn btn-primary' id='btn-5' onClick={()=> numericBtn('5')}>5</button>
          <button type="button" className='btn btn-primary' id='btn-6' onClick={()=> numericBtn('6')}>6</button>
        </section>

        <section className='thirdRow'>
          <button type="button" className='btn btn-primary' id='btn-7' onClick={()=> numericBtn('7')}>7</button>
          <button type="button" className='btn btn-primary' id='btn-8' onClick={()=> numericBtn('8')}>8</button>
          <button type="button" className='btn btn-primary' id='btn-9' onClick={()=> numericBtn('9')}>9</button>
        </section>

        <section className='fourthRow'>
          <button type="button" className='btn btn-primary' id='btn-back'   onClick={()=> backBtn()}>←</button>
          <button type="button" className='btn btn-primary' id='btn-0'      onClick={()=> numericBtn('0')}>0</button>
          <button type="button" className='btn btn-primary' id='btn-check'  onClick={()=> checkBtn()}>✓</button>
        </section>

      </header>
    </div>
  );
}

export default App;
