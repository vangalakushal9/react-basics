import React, { useState } from 'react';
import { Link } from 'react-router-dom'

function CountComponent() {
    const [count, setCount] = useState(0)

    return (
        <div className='App'>
            <h1>{count}</h1>
            <button onClick={() => { setCount(count + 1) }}>Increase Count</button>
            <button onClick={() => { setCount(count - 1) }}>Decrease Count</button>
            <div>

                <Link to='/uepractice'>Show Other Component</Link>

            </div>
        </div>
    );
}

export default CountComponent;