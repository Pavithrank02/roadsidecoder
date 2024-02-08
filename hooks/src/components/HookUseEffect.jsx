import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const HookUseEffect = () => {
  const [count, setCount] = useState({
    num: 1,
    id: 'abcd'
  })
const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.addEventListener("resize", ()=> {
      setScreenWidth(window.innerWidth)
    })

  }, [count])
const handleAdd =() => {
  setCount((pre) =>  {
    return {
      ...pre,
      num: pre.num + 1
    }
  })
}
const handleSub =() => {
  setCount((pre) =>  {
    return {
      ...pre,
      num: pre.num - 1
    }
  })
}
  return (
    <div className="">
      <button onClick={handleSub}>-</button>
      <span>{count.num}</span>
      <button onClick={handleAdd}>+</button>
     <span>{screenWidth}</span>
    </div>
  );
}

export default HookUseEffect