import {useState} from 'react';
import './Content.css';
import logo from '../public/dec2bin-removebg-preview.png';

export default function Content() {
    const [bin, setBin] = useState("");
    const [decimal, setDecimal] = useState("");
  
    function convert()
    {
      if(isNaN(decimal) || decimal < 0)
      {
        setBin(`${decimal} is not a valid decimal`);
        return
      }
  
      let stringBin = "";
      let decimalValue = parseInt(decimal, 10);
      let tempValue = "";
  
      while(decimalValue > 0)
      {
        let remainder = decimalValue % 2;
        tempValue = tempValue + remainder;
        decimalValue = Math.floor(decimalValue / 2);
      }
  
      const dig = tempValue.length;
  
      for(let i = dig - 1; i >= 0; i--)
      {
        stringBin = stringBin + tempValue.charAt(i);
      }
      setBin(stringBin);
    }

    function clear(){
        setBin('');
        setDecimal('');
    }

  return (
    <>
    <div className='nav-bar'>
            <div className="logo">
                < img src={logo} alt="" />
            </div>
            <h2 className='logo-name'>Dec2Bin</h2>
    </div>
    
    <div className="content">
      <h3 className="body-text">Decimal</h3>

      <div className="btn-input">
        <input type="number" value={decimal} onChange={(e) => setDecimal(e.target.value)} />
        <button onClick={convert}>Convert</button>
      </div>

      <div className="spinner">
      </div>

      <div className="display">
        <h3 className='bin-head'>Binary</h3>
        <p className="binary">{bin}</p>
      </div>

      <div className="clearBtn">
        <button onClick={clear}>Clear</button>
      </div>
    </div>

    <div className="footer">
        <p className="footer-copyrights">Copyright 2024 @ dec2bin.com - All Rights Reserved</p>
    </div>
    </>
  )
}