import './App.css';
import { useState } from 'react';

function App() {
  let displayMsg = 'Enter Code 102938'
  const [displayLen, setDisplayLen] = useState(0)
  const [displayNum, setDisplayNum] = useState(displayMsg)
  const [btnCheckPressed, setBtnCheckPressed] = useState(false)

  function numericBtn (i){
    if (displayLen < 6) {
      if(btnCheckPressed){
        setBtnCheckPressed(!btnCheckPressed)
        resetDisplay(i)
        return
      }

      if(displayLen===0){
        setDisplayNum(i)
      }else{
        setDisplayNum(displayNum + i)
      }

      setDisplayLen(displayLen + 1)
    }
  }

  function resetDisplay (j){
    setDisplayNum(displayMsg)
    setDisplayLen(0)
    numericBtn(j)
    return
  }


  function backBtn (){
    if(!btnCheckPressed){
      let newDisplayNum = displayNum
      if(displayLen>0){
        setDisplayNum(newDisplayNum.slice(0,displayLen - 1))
        setDisplayLen(displayLen - 1)
      }
    }
  }

  function checkBtn (){
    if(!btnCheckPressed){
      if(displayNum==='102938'){
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
