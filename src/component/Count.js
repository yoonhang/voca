import React, { useState } from 'react';

function ExampleComponent() {
    // count라는 state 변수와 이를 업데이트할 수 있는 setCount 함수 선언
    const [count, setCount] = useState(0);

    // 버튼을 클릭하면 count 상태가 1 증가합니다.
    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default ExampleComponent;
