import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="app">
      <p className="eyebrow">REACT STARTER</p>
      <h1>Hello, React.</h1>
      <p>A little starting point for your next idea.</p>
      <button type="button" onClick={() => setCount((value) => value + 1)}>
        Count: {count}
      </button>
      <p className="hint">
        Edit <code>src/App.jsx</code> to make it yours.
      </p>
    </main>
  )
}
