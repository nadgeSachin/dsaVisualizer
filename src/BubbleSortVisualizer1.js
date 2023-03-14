import React, { useState ,useEffect} from "react";
import "./BubbleSortVisualizer.css";

const delay = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

const BubbleSortVisualizer1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(generateData(10));  
  },[]);

  const generateData = (numBars) => {
    const data=[];
    for (let i = 0; i < numBars; i++) {
      data.push(Math.floor(Math.random() *47)+4);
    }
    return data;
  };

  const bubbleSort = async() => {
    const arr = [...data];
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          const temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
          setData([...arr]);
          await delay(400);
        }
      }
    }
  };
const solve=()=>{
  setData(generateData(10));  
}
  return (
    <>
    <center>
    <button  className='btn' onClick={bubbleSort}>Bubble Sort</button>
    <button className='btn' onClick={solve}>Reset Chart</button>
    <div className='main'>
 {
 data.map((value, index) => ( 
    <div key={index} className="sub" style={{height:`${value}vh` }}>{value}</div>
))
}
</div> 
</center>
</>
  );
};

export default BubbleSortVisualizer1;
