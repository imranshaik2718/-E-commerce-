import React, { useEffect, useState } from 'react'

function Demo() {
   const [count, setCount] = useState(0);

  // useEffect runs every time the component is rendered or updated
  useEffect(() => {
    console.log(`Count changed: ${count}`);
  }, [count]); // This is the dependency array

  return (
    <div>
      <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
    </div>
  )
}

export default Demo
