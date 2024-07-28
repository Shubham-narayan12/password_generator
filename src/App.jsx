import { useState, useCallback, useEffect,useRef } from "react";

import "./App.css";

function App() {
  const [length, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [passwordGen, setPasswordgen] = useState(false);

  //useRef hook
  const passwordRef = useRef(null);

  let passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPasswordgen(pass);
  }, [length, number, charAllowed, setPasswordgen]);

  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(passwordGen);
  }, [passwordGen]);

  useEffect(() => {              //jab v page reload hoga to ye call hoga
    passwordGenerator();
  }, [length, number, charAllowed, passwordGenerator]);   //ya issmai se kissi mai v update hoga to te call hoga.

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8  bg-gray-800 text-orange-500">
        <h1 className="text-white text-center">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={passwordGen}
            className="outline-none w-full py-1 px-3 rounded-lg"
            placeholder="password"
            readOnly
            ref={passwordRef }
          
          />
          <button
            className="outline-none rounded-lg bg-blue-700"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>
        <div classname="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLenght(e.target.value);
              }}
            />
            <lebel>lenght({length}) </lebel>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={number}
              id="numberInput"
              onChange={() => {
                setNumber((prev) => !prev); //previous value jo v hain usko reverse krdo.
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setChar((prev) => !prev); //previous value jo v hain usko reverse krdo.
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
