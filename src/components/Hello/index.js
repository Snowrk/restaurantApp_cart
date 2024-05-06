import {useState} from 'react'

const Hello = () => {
  const [count, setCount] = useState({})
  console.log(count)
  return (
    <>
      <h1>Hello World</h1>
      <button>hello</button>
    </>
  )
}

export default Hello
