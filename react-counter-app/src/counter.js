import React, { useState } from 'react';
import './counter.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='counter-box'>
            <h1 style={{ fontSize: '2em' }}>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>Decrement</button>
        </div>
    );
};

export default Counter;
