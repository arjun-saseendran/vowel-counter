import { useRef, useState } from "react";

function App() {
  // Store vowels
  const [a, setA] = useState(0);
  const [e, setE] = useState(0);
  const [i, setI] = useState(0);
  const [o, setO] = useState(0);
  const [u, setU] = useState(0);
  const [total, setTotal] = useState(0);

  
  // Config ref
  const inputValue = useRef();

  // Count vowels
  const countVowels = () => {
    // Create container variables
    let A = 0;
    let E = 0;
    let I = 0;
    let O = 0;
    let U = 0;

    // Get input value
    const textValue = inputValue.current.value;

    // Declare array
    let textArray = [];
    textArray = textValue.split("");

    textArray.map((letter) => {
      console.log(textArray);
      if (letter === "A") {
        A++;
      } else if (letter === "a") {
        A++;
      } else if (letter === "E") {
        E++;
      } else if (letter === "e") {
        E++;
      } else if (letter === "I") {
        I++;
      } else if (letter === "i") {
        I++;
      } else if (letter === "O") {
        O++;
      } else if (letter === "o") {
        O++;
      } else if (letter === "U") {
        U++;
      } else if (letter === "u") {
        U++;
      }

      // Count
      setA(A);
      setE(E);
      setI(I);
      setO(O);
      setU(U);

      // Set total
      setTotal(A + E + I + O + U);
    });
  }
   
  // Reset 
    const clearCount = () => {
      // Clear state varibales
      setA(0);
      setE(0);
      setI(0);
      setO(0);
      setU(0);
      setTotal(0);
     
     // Clear input
      inputValue.current.value = "";
    };
  

  return (
    <div className="container">
      <h1 className="text-white text-3xl font-bold text-center mt-10">
        Vowel Counter
      </h1>
      <div className="bg mx-auto w-1/2 rounded-xl flex flex-col items-center h-96 mt-10 ">
        <div className="flex justify-between p-5 w-full  text-white mt-5">
          <span>A : {a} </span>
          <span>+</span>
          <span>E : {e} </span>
          <span>+</span>
          <span>I : {i} </span>
          <span>+</span>
          <span>O : {o} </span>
          <span>+</span>
          <span>U : {u} </span>
          <span>=</span>
          <span>Total : {total} </span>
        </div>

        <div>
          <textarea
            ref={inputValue}
            className="rounded-xl px-20 py-20"
            placeholder="Copy paste or type words here..."
          ></textarea>
        </div>
        <div className="mt-2">
          <button
            onClick={countVowels}
            title="Click here to count vowels"
            className="text-white bg-gray-500 px-10 py-2 rounded-lg me-2 hover:bg-gray-400"
          >
            Count Vowels
          </button>
          <button
            onClick={clearCount}
            title="Click here to reset the count"
            className="text-white bg-gray-500 px-10 py-2 rounded-lg hover:bg-gray-400"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
