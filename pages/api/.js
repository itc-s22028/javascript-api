import { useState } from 'react';

function Example() {
  const [data, setData] = useState(null);

  const handleClick = async () => {
    const response = await fetch('/api/data');
    const newData = await response.json();
    setData(newData);
  };

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data && <p>{data.message}</p>}
    </div>
  );
}

export default Example;

