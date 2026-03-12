// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

// return (
//   <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 via-blue-500 to-indigo-600">
//     <div className="bg-white p-8 rounded-xl shadow-2xl w-[28rem] text-center">
//       {/* Quiz Questions */}
//       {!showResult && !showReview && (
//         <>
//           <h2 className="text-2xl font-bold mb-6 text-gray-800">
//             {questions[current].question}
//           </h2>
//           {questions[current].options.map((opt, i) => (
//             <button
//               key={i}
//               onClick={() => handleAnswer(opt)}
//               className="block w-full bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white font-semibold py-2 px-4 rounded-lg mb-3 transition duration-200"
//             >
//               {opt}
//             </button>
//           ))}
//         </>
//       )}

//       {/* Result Screen */}
//       {showResult && !showReview && (
//         <>
//           <h2 className="text-3xl font-bold mb-4 text-green-600">
//             Quiz Complete 🎆
//           </h2>
//           <p className="mb-6 text-lg font-medium text-gray-700">
//             Your Score: {score}/{questions.length}
//           </p>
//           <button
//             onClick={restartQuiz}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-3 transition duration-200"
//           >
//             Restart Quiz 🔁
//           </button>
//           <button
//             onClick={() => setShowReview(true)}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
//           >
//             See your Questions & Answers 📋
//           </button>
//         </>
//       )}

//       {/* Review Screen */}
//       {showReview && (
//         <>
//           <h2 className="text-2xl font-bold mb-4 text-purple-700">
//             Your Answers 📋
//           </h2>
//           <div className="max-h-64 overflow-y-auto text-left space-y-3">
//             {answers.map((a, i) => (
//               <div
//                 key={i}
//                 className="p-3 rounded-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200 shadow-md"
//               >
//                 <p className="font-semibold">
//                   <strong>Q{i + 1}:</strong> {a.question}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Your Answer:</span>{" "}
//                   {a.yourAnswer}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Correct Answer:</span>{" "}
//                   {a.correctAnswer}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={restartQuiz}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-6 transition duration-200"
//           >
//             Restart Quiz 🔁
//           </button>
//         </>
//       )}
//     </div>
//     {/* <div className="test-box">Tailwind Test</div> */}
//   </div>

// );









// Main code 

// import { useState } from "react";
// import { questions } from "./questions";

// function App() {
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [showReview, setShowReview] = useState(false);

//   const handleAnswer = (option) => {
//     setAnswers([
//       ...answers,
//       {
//         question: questions[current].question,
//         yourAnswer: option,
//         correctAnswer: questions[current].answer,
//       },
//     ]);

//     if (current + 1 < questions.length) {
//       setCurrent(current + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const score = answers.filter((a) => a.yourAnswer === a.correctAnswer).length;

//   const restartQuiz = () => {
//     setCurrent(0);
//     setAnswers([]);
//     setShowResult(false);
//     setShowReview(false);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
//       <h1 className="text-3xl font-bold text-white mb-4">Quiz App 😎</h1>

//       <div className="bg-white p-8 rounded-xl shadow-2xl w-[30rem] text-center">
//         {/* Quiz Questions */}
//         {!showResult && !showReview && (
//           <>
//             <p className="text-lg text-black mb-6">
//               Questions - {current + 1}/{questions.length}
//             </p>
//             <h2 className="text-xl font-semibold mb-4 text-gray-800">
//               Q-{current + 1}. {questions[current].question} 🤔
//             </h2>
//             {questions[current].options.map((opt, i) => (
//               <button
//                 key={i}
//                 onClick={() => handleAnswer(opt)}
//                 className="block w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg mb-3 transition duration-200"
//               >
//                 {opt}
//               </button>
//             ))}
//           </>
//         )}

//         {/* Result Screen */}
//         {showResult && !showReview && (
//           <>
//             <h2 className="text-3xl font-bold mb-4 text-green-600">
//               Quiz Complete 🎆
//             </h2>
//             <p className="mb-6 text-lg font-medium text-gray-700">
//               Your Score: {score}/{questions.length}
//             </p>
//             <button
//               onClick={restartQuiz}
//               className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-3 transition duration-200"
//             >
//               Restart Quiz 🔁
//             </button>
//             <button
//               onClick={() => setShowReview(true)}
//               className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
//             >
//               See your Questions & Answers 📋
//             </button>
//           </>
//         )}

//         {/* Review Screen */}
//         {showReview && (
//           <>
//             <h2 className="text-2xl font-bold mb-4 text-purple-700">
//               Your Answers 📋
//             </h2>

//             {/* New Score Line */}
//             <p className="mb-4 text-lg font-medium text-gray-800">
//               Your Score: {score}/{questions.length}
//             </p>

//             <div className="max-h-64 overflow-y-auto text-left space-y-3">
//               {answers.map((a, i) => (
//                 <div
//                   key={i}
//                   className="p-3 rounded-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200 shadow-md"
//                 >
//                   <p className="font-semibold">
//                     <strong>Q{i + 1}:</strong> {a.question}
//                   </p>
//                   <p className="text-red-700">
//                     <span className="font-medium text-blue-700">Your Answer:</span>{" "}
//                     {a.yourAnswer}
//                   </p>
//                   <p className="text-green-700">
//                     <span className="font-medium text-blue-900">Correct Answer:</span>{" "}
//                     {a.correctAnswer}
//                   </p>
//                 </div>
//               ))}
//             </div>
//             <button
//               onClick={restartQuiz}
//               className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-6 transition duration-200"
//             >
//               Restart Quiz 🔁
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;








// New updated code 

// import { useState, useEffect } from "react";
// import { sets } from "./questions";

// function App() {
//   const [currentSet, setCurrentSet] = useState(null);
//   const [current, setCurrent] = useState(0);
//   const [answers, setAnswers] = useState([]);
//   const [showResult, setShowResult] = useState(false);
//   const [showReview, setShowReview] = useState(false);
//   const [timer, setTimer] = useState(60); // 30 min = 1800 sec

//   const handleAnswer = (option) => {
//     setAnswers([
//       ...answers,
//       {
//         question: sets[currentSet][current].question,
//         yourAnswer: option,
//         correctAnswer: sets[currentSet][current].answer,
//       },
//     ]);

//     if (current + 1 < sets[currentSet].length) {
//       setCurrent(current + 1);
//     } else {
//       setShowResult(true);
//     }
//   };

//   const score = answers.filter((a) => a.yourAnswer === a.correctAnswer).length;

//   const restartQuiz = () => {
//     setCurrentSet(null);
//     setCurrent(0);
//     setAnswers([]);
//     setShowResult(false);
//     setShowReview(false);
//     setTimer(1800);
//   };

//   // Timer logic
//   useEffect(() => {
//     if (!currentSet || showResult || showReview) return;
//     if (timer <= 0) {
//       setShowResult(true);
//       return;
//     }
//     const interval = setInterval(() => setTimer((t) => t - 1), 1000);
//     return () => clearInterval(interval);
//   }, [timer, currentSet, showResult, showReview]);

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
//       <h1 className="text-3xl font-bold text-white mb-6">Quiz App 😎</h1>

//       {/* Home Screen - Sets */}
//       {!currentSet && (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {Object.keys(sets).map((setKey) => (
//             <div
//               key={setKey}
//               className="bg-white p-6 rounded-xl shadow-lg text-center"
//             >
//               <h2 className="text-xl font-bold mb-2">Set - {setKey}</h2>
//               <p className="text-gray-700 mb-4">
//                 Total {sets[setKey].length} Questions
//               </p>
//               <button
//                 onClick={() => setCurrentSet(setKey)}
//                 className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
//               >
//                 Start Quiz
//               </button>
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Quiz Screen */}
//       {currentSet && !showResult && !showReview && (
//         <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
//           <p className="text-lg font-medium text-red-600 mb-4">
//             Time Left: {Math.floor(timer / 60)}:
//             {String(timer % 60).padStart(2, "0")}
//           </p>
//           <p className="text-lg text-black mb-6">
//             Questions - {current + 1}/{sets[currentSet].length}
//           </p>
//           <h2 className="text-xl font-semibold mb-4 text-gray-800">
//             Q-{current + 1}. {sets[currentSet][current].question} 🤔
//           </h2>
//           {sets[currentSet][current].options.map((opt, i) => (
//             <button
//               key={i}
//               onClick={() => handleAnswer(opt)}
//               className="block w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg mb-3 transition duration-200"
//             >
//               {opt}
//             </button>
//           ))}
//         </div>
//       )}

//       {/* Result Screen */}
//       {showResult && !showReview && (
//         <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
//           <h2 className="text-3xl font-bold mb-4 text-green-600">
//             Quiz Complete 🎆
//           </h2>
//           <p className="mb-6 text-lg font-medium text-gray-700">
//             Your Score: {score}/{sets[currentSet].length}
//           </p>
//           <button
//             onClick={restartQuiz}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-3 transition duration-200"
//           >
//             Restart Quiz 🔁
//           </button>
//           <button
//             onClick={() => setShowReview(true)}
//             className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
//           >
//             See your Questions & Answers 📋
//           </button>
//         </div>
//       )}

//       {/* Review Screen */}
//       {showReview && (
//         <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
//           <h2 className="text-2xl font-bold mb-4 text-purple-700">
//             Your Answers 📋
//           </h2>
//           <p className="mb-4 text-lg font-medium text-gray-800">
//             Your Score: {score}/{sets[currentSet].length}
//           </p>
//           <div className="max-h-64 overflow-y-auto text-left space-y-3">
//             {answers.map((a, i) => (
//               <div
//                 key={i}
//                 className="p-3 rounded-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200 shadow-md"
//               >
//                 <p className="font-semibold">
//                   <strong>Q{i + 1}:</strong> {a.question}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Your Answer:</span> {a.yourAnswer}
//                 </p>
//                 <p className="text-gray-700">
//                   <span className="font-medium">Correct Answer:</span>{" "}
//                   {a.correctAnswer}
//                 </p>
//               </div>
//             ))}
//           </div>
//           <button
//             onClick={restartQuiz}
//             className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-6 transition duration-200"
//           >
//             Restart Quiz 🔁
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;


import { useState, useEffect } from "react";
import { sets } from "./questions";

function App() {
  const [currentSet, setCurrentSet] = useState(null);
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [showReview, setShowReview] = useState(false);
  const [timer, setTimer] = useState(60); // 5 min = 300 sec (change to 60 for 1 min)

  const handleAnswer = (option) => {
    setAnswers([
      ...answers,
      {
        question: sets[currentSet][current].question,
        yourAnswer: option,
        correctAnswer: sets[currentSet][current].answer,
      },
    ]);

    if (current + 1 < sets[currentSet].length) {
      setCurrent(current + 1);
    } else {
      setShowResult(true);
    }
  };

  const score = answers.filter((a) => a.yourAnswer === a.correctAnswer).length;

  const restartQuiz = () => {
    setCurrentSet(null);
    setCurrent(0);
    setAnswers([]);
    setShowResult(false);
    setShowReview(false);
    setTimer(60); // reset timer
  };

  // Timer logic
  useEffect(() => {
    if (!currentSet || showResult || showReview) return;
    if (timer <= 0) {
      setShowResult(true);
      return;
    }
    const interval = setInterval(() => setTimer((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer, currentSet, showResult, showReview]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-600">
      <h1 className="text-3xl font-bold text-pink-500 mb-6">PURUSHOTTAM ACADEMY OF COMPUTER EDUCATION 💻</h1>
      <h2 className="text-2xl font-bold text-white mb-6">OS-CIT Quiz App 😎</h2>

      {/* Home Screen - Sets
      {!currentSet && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(sets).map((setKey) => (
            <div
              key={setKey}
              className="bg-white p-6 rounded-xl shadow-lg text-center"
            >
              <h2 className="text-xl font-bold mb-2">Set - {setKey}</h2>
              <p className="text-gray-700 mb-4">
                Total {sets[setKey].length} Questions
              </p>
              <button
                onClick={() => setCurrentSet(setKey)}
                className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
              >
                Start Quiz
              </button>
            </div>
          ))}
        </div>
      )} */}




      {/* Home Screen - Sets
{!currentSet && (
  <div className="flex flex-wrap justify-center gap-6">
    {Object.keys(sets).map((setKey) => (
      <div
        key={setKey}
        className="bg-white p-6 rounded-xl shadow-lg text-center w-64 transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <h2 className="text-xl font-bold mb-2">Set - {setKey}</h2>
        <p className="text-gray-700 mb-4">
          Total {sets[setKey].length} Questions
        </p>
        <button
          onClick={() => setCurrentSet(setKey)}
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
        >
          Start Quiz
        </button>
      </div>
    ))}
  </div>
)} */}






       {/* Home Screen - Sets */}
{!currentSet && (
  <div className="flex flex-wrap justify-center gap-6">
    {Object.keys(sets).map((setKey, index) => {
      // Different background colors for each card
      const colors = [
        "bg-gradient-to-r from-pink-400 to-red-400",
        "bg-gradient-to-r from-blue-400 to-indigo-400",
        "bg-gradient-to-r from-green-400 to-teal-400",
        "bg-gradient-to-r from-yellow-400 to-orange-400",
        "bg-gradient-to-r from-purple-400 to-pink-500",
        "bg-gradient-to-r from-cyan-400 to-blue-500",
        "bg-gradient-to-r from-lime-400 to-green-500",
        "bg-gradient-to-r from-rose-400 to-pink-500",
        "bg-gradient-to-r from-fuchsia-400 to-purple-500",
        "bg-gradient-to-r from-amber-400 to-orange-500",
      ];
      return (
        <div
          key={setKey}
          className={`p-6 rounded-xl shadow-lg text-center w-64 transform transition duration-300 hover:scale-105 hover:shadow-2xl ${colors[index % colors.length]}`}
        >
          <h2 className="text-xl font-bold mb-2 text-white">Set - {setKey}</h2>
          <p className="text-white mb-4">
            Total {sets[setKey].length} Questions
          </p>
          <button
            onClick={() => setCurrentSet(setKey)}
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold py-2 px-4 rounded-lg transition duration-200"
          >
            Start Quiz
          </button>
        </div>
      );
    })}
  </div>
)}






      {/* Quiz Screen */}
      {currentSet && !showResult && !showReview && (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
          <p className="text-lg font-medium text-red-600 mb-4">
            Time Left: {Math.floor(timer / 60)}:
            {String(timer % 60).padStart(2, "0")}
          </p>
          <p className="text-lg text-black mb-6">
            Questions - {current + 1}/{sets[currentSet].length}
          </p>
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            Q-{current + 1}. {sets[currentSet][current].question} 🤔
          </h2>
          {sets[currentSet][current].options.map((opt, i) => (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              className="block w-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 text-white font-semibold py-2 px-4 rounded-lg mb-3 transition duration-200"
            >
              {opt}
            </button>
          ))}
        </div>
      )}

      {/* Result Screen */}
      {showResult && !showReview && (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
          <h2 className="text-3xl font-bold mb-4 text-green-600">
            Quiz Complete 🎆
          </h2>
          <p className="mb-6 text-lg font-medium text-gray-700">
            Your Score: {score}/{sets[currentSet].length}
          </p>
          <button
            onClick={restartQuiz}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mb-3 transition duration-200"
          >
            Restart Quiz 🔁
          </button>
          <button
            onClick={() => setShowReview(true)}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-200"
          >
            See your Questions & Answers 📋
          </button>
        </div>
      )}

      {/* Review Screen */}
      {showReview && (
        <div className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-md text-center">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">
            Your Answers 📋
          </h2>
          <p className="mb-4 text-lg font-medium text-gray-800">
            Your Score: {score}/{sets[currentSet].length}
          </p>
          <div className="max-h-64 overflow-y-auto text-left space-y-3">
            {answers.map((a, i) => (
              <div
                key={i}
                className="p-3 rounded-lg bg-gradient-to-r from-yellow-200 via-pink-200 to-red-200 shadow-md"
              >
                <p className="font-semibold">
                  <strong>Q{i + 1}:</strong> {a.question}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Your Answer:</span> {a.yourAnswer}
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Correct Answer:</span>{" "}
                  {a.correctAnswer}
                </p>
              </div>
            ))}
          </div>
          <button
            onClick={restartQuiz}
            className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg mt-6 transition duration-200"
          >
            Restart Quiz 🔁
          </button>
        </div>
      )}
    </div>
  );
}

export default App;