import { useState } from "react";

function Counter() {

    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        if (count > 0) setCount(count - 1);
    }

    return (
        <div className="Counter">
            <h2>Counter</h2>

            <p>You clicked {count} times</p>

            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default Counter;