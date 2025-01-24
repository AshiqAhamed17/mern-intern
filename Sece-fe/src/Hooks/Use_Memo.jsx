// useMemo hook example code in react
import React, { useMemo } from 'react';

const ExpensiveComponent = () => {
    // Expensive computation
    const result = 2 * 3;
    return <div>Result: {result}</div>;
  };
  
  const MemoizedComponent = React.memo(ExpensiveComponent);
  
  const UseMemo = () => {
    return (
      <div>
        <MemoizedComponent />
      </div>
    );
  };
  
  export default UseMemo;