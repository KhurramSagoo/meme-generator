import React, { useState } from 'react';

const IncrementDecrement = () => {
  const [first, setfirst] = useState(0);

    return (
    <div>
        <button onClick={(()=>setfirst(first-1))}>-</button>
        <p>{first}</p>
        <button onClick={(()=>setfirst(first+1))}>+</button>

    </div>
  )
}

export default IncrementDecrement;