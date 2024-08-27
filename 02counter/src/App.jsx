import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15);
  let [text, setText] = useState('Hello');
  let [liked, setLiked] = useState(true);
  const [name, setName] = useState('Taylor');
  const [age, setAge] = useState(42);

  //  let counter = 15;
  const addValue = () => {
    // console.log('clicked', counter);

    // counter  = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1)
    } else {
      setCounter('The value cannot be more than 20')
    }


  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
    } else {
      setCounter('The value cannot be less than 0')
    }

  }
  const hanldeChange = (e) => {
    setText(e.target.value)
  };
  function handleChange(e) {
    setLiked(e.target.checked);
  }

  return (
    <>
      <h1>Chay aur React || with Vite</h1>
      <h2>Counter value : {counter}</h2>
      <button
        onClick={addValue}
      >Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove Value {counter}</button>
      <br />
      ==================================================================
      <br />
      <input value = {text} onChange={hanldeChange} />
      <br />
      <p>you typed: {text}</p>
      <button onClick={() => setText('Hello')}> reset</button>
      <br />
      ===================================================================
      <br />
      <label>
        <input
          type="checkbox"
          checked={liked}
          onChange={handleChange}
        />
        I liked this
      </label>
      <p>You {liked ? 'liked' : 'did not like'} this.</p>
      <br />
      ===================================================================
      <br />
      <input
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <br />
        <button onClick={() => setAge(age + 1)}>
        Increment age
      </button>
      <br />
      <button onClick={() => setAge(age -1)}>Decrement Age</button>
      <p>Hello, {name}, Your age is : {age}.</p>
    </>
  )
}

export default App
