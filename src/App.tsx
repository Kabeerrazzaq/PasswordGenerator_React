import { useState } from "react"


const App = () => {
  const [counter, setCounter] = useState(0)
  // value add function start here
   const ValueAdd = () => {
   if(counter < 20){
    setCounter(counter + 1)
   }
   }
  //  value add function end here

   //  value remove function start here
   const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
   }
  return (
    <>
    <div className="text-center pt-[20%] bg-pink-500 h-screen">
      <h1 className="font-bold text-[1.5rem]">Counter Increase / Decrease</h1>
      <h2  className="font-semibold text-[1.3rem]">Counter value :{counter} </h2>
      <div className="flex gap-5 justify-center items-center pt-5">
      <button className=" bg-neutral-950 text-white rounded-xl px-5 py-2"
      onClick={ValueAdd}
      >Value Add</button>
      <br />
      <button className=" bg-neutral-950 text-white rounded-xl px-5 py-2"
       onClick={removeValue}>Value Minus</button>
      </div>
    </div>
    </>
  )
}

export default App
