import { useState, useCallback } from "react";

import "./App.css";

function App() {
  const [lenght, setLenght] = useState(8);
  const [number, setNumber] = useState(false);
  const [charAllowed, setChar] = useState(false);
  const [passwordGen, setPasswordgen] = useState(false);

  let passwordGenrator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLNMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*?";

    for (let i = 1; i <= array.lenght; i++) {
      let char = Math.floor(Math.random() * str.lenght + 1);
      pass = str.charAt(char);
    }

    setPasswordgen(pass);
  }, [lenght, number, char, passwordGen, setPasswordgen]) 

  return (
    <>
      <h1>test</h1>
    </>
  );
}


