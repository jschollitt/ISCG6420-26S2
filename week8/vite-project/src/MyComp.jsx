import { useState } from "react";
import './MyComp.css';

function MyComp() {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <h2>My Component</h2>
            <button onClick={() => {setCounter(counter + 1)}}>Clicked {counter} times</button>
        </div>
    );
}

export default MyComp;