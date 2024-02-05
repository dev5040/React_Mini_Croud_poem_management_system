



import { useState,useEffect } from "react";

import axios from "axios";

const Display=()=>
{
  const [mydata , setMydata]=useState([]);
  const loadData=()=>
  {
     let url="http://localhost:4000/poems";
    axios.get(url).then((res)=>{
      setMydata(res.data);
    });
  }
  useEffect(()=>{
    loadData();
  },[]);

  const MyData=mydata.map((key)=>{

    return(

      <>
      <tr align="center">
        <td>{key.srcno}</td>
        <td>{key.poemnm}</td>
        <td>{key.poetnm}</td>
        <td>{key.prc}</td>
      </tr>
      </>
    );
  });

  return(
    <>
      <center>
      <h1 style={{fontSize:"40px"}}>DISPLAY MY POEM DATA</h1>
      <hr color="black" size="1" style={{width:"500px"}}/>
      <br/>
      
      <table border="1px" width="400px" align="center" height="300px" bgcolor="#aae6b2">
        <tr bgcolor="orange">
          
          <th>Src No</th>
          <th>Poem</th>
          <th>Poet</th>
          <th>Price</th>
          
        </tr>
        {MyData}
      </table>
      </center><br/><br/>

    </>
  );
}

export default Display;


