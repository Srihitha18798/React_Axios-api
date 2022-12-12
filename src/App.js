import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [data,setData]=useState([]);
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/todos').then(
      response=>setData(response.data)
    )
  },[])
  return (
    <div>
      {data.map(item=><li key={item.id}>{item.title}</li>)}
    </div>
  );
}

export default App;
