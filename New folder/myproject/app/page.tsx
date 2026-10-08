// "use client";

// // import Image from "next/image";
// import { useState } from "react";
// import {generateTextAction} from "@/app/actions/aiActions";

// export default function Home() {
//   const [prompt, setPrompt] = useState("");
//   const [Output, setOutput] = useState("");

//   const handleSendPrompt = async () => {
//     const response = await generateTextAction(prompt);
//     setOutput(response);
//   }


//   return (
//     <main className="flex w-screen h-screen flex-col items-center justify-between p-24">


//       {Output && (
//         <div className="output-area w-full h-[80%] overflow-y-auto border p-4 rounded-md">
//           <p className="text-lg">{Output}</p>
//         </div>
//       )}


//     <div className="input-area fixed bottom-6 px-24 py-2 items-center justify-center w-full">
//       <input type="text" placeholder="Type your message..." 
//       className="border p-2 rounded-md w[80%] outline-none "
//       value={prompt}
//       onChange={(e) => setPrompt(e.target.value)}
//       >
       
//         </input>
//       <button
//        className="bg-neutral-700 text-white p-2 cursor-pointer rounded-md ml-4 w-[18%]" 
//      onClick={handleSendPrompt}
//      >
// send   
//       </button>
//     </div>
//     </main>
//   );
// }


"use client";

import { useState } from "react";
import { generateTextAction } from "@/app/actions/aiActions";

export default function Home() {
  const [prompt, setPrompt] = useState("");
  const [Output, setOutput] = useState("");

  const handleSendPrompt = async () => {
    const response = await generateTextAction(prompt);
    setOutput(response);
  };

  return (
    <main className="flex w-screen h-screen flex-col items-center justify-between p-24">
      {Output && (
        <div className="output-area w-full h-[80%] overflow-y-auto border p-4 rounded-md">
          <p className="text-lg">{Output}</p>
        </div>
      )}

      <div className="input-area fixed bottom-6 px-24 py-2 flex items-center justify-center w-full">
        <input
          type="text"
          placeholder="Type your message..."
          className="border p-2 rounded-md w-[80%] outline-none"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        />

        <button
          className="bg-neutral-700 text-white p-2 cursor-pointer rounded-md ml-4 w-[18%]"
          onClick={handleSendPrompt}
        >
          Send
        </button>
      </div>
    </main>
  );
}