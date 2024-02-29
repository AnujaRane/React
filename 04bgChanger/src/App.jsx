import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

    <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "red", fontFamily: "montserrat"}}>Red</button>

    <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "green", fontFamily: "montserrat"}}>Green</button>

    <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "blue", fontFamily: "montserrat"}}>Blue</button>

    <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "yellow", fontFamily: "montserrat"}}>Yellow</button>

    <button onClick={() => setColor("gray")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "gray", fontFamily: "montserrat"}}>Gray</button>

<button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "purple", fontFamily: "montserrat"}}>Purple</button>

<button onClick={() => setColor("lavender")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "darkGray", fontFamily: "montserrat"}}>Lavender</button>

<button onClick={() => setColor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor: "black", fontFamily: "montserrat"}}>Black</button>
    </div>
    </div>
    </div>
  )
}

export default App
