import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>Contador: {count}</h1>
            {/* El botón llama a setCount para incrementar el valor de "count" */}
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
        </div>
    );
}

export default Counter;
