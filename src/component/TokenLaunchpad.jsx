import React from 'react'; 
import './TokenLaunchpad.css';

const TokenLaunchpad = () => {

    function createToken() {
        const name = document.getElementById('name').value;
        const symbol = document.getElementById('symbol').value;
        const image = document.getElementById('image').value;
        const initialSupply = document.getElementById('initialSupply').value;
    }

    return(
        <div className="mainContent">
        <h1 className="mainTitle">BAT-LAUNCHPAD</h1>
        <form className="formContainer">
          <input 
            type="text"
            className="inputBox"
            placeholder="Token Name" />
          <input 
            type="text"
            className="inputBox"
            placeholder="Token Symbol" />
          <input 
          type="number"
          className="inputBox"
          placeholder="Initial Token Supply"
          min={0} />
          <input 
            type="text"
            className="inputBox"
            placeholder="Token Image URL" />
          <button onClick={createToken} className='btn'>Create</button>
        </form>
      </div>
    )
}

export default TokenLaunchpad